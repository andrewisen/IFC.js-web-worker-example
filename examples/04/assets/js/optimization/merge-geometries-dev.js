import { BufferGeometryUtils } from 'https://unpkg.com/three/examples/jsm/utils/BufferGeometryUtils.js';
const MESH = 'Mesh';
const LINE = 'Line';
const LINESEGMENTS = 'LineSegments';
/**
 * Each geometry (door, roof, floor, etc.) has a certain material.
 * All (or most) floors, ceilings, roofs, stairs, etc. will have the SAME material.
 *
 * We can therefore group all objects (geometries) based on the material UUID.
 * The material property referees to original material objects, e.g. LineBasicMaterial, MeshBasicMaterial, MeshLambertMaterial, etc.
 * The bufferGeometries property is an array with all geometries that share the same material.
 */
class MaterialGroup {
  constructor(material, bufferGeometries) {
    this.material = material;
    this.bufferGeometries = bufferGeometries;
  }
}
/**
 * The Merger class will merge all the geometers and return a single THREE.Group().
 */
class Merger {
  constructor(structured) {
    this.structured = structured;
    this.meshes = {};
    this.lines = {};
    this.lineSegments = {};
  }
  /**
   * Merge geometries and create a group that contains these
   */
  mergeGeometries() {
    const { children } = this.structured;
    children.forEach((child) => this.merge(child));
    const group = this.createGroup();
    const transparentGroup = this.createTransparentGroup(group);
    return { group, transparentGroup };
  }
  /**
   * Merge THREE.Object3D
   */
  merge(child, parent = undefined) {
    const { type, children } = child;
    if (type === MESH) this.mergeMesh(child, parent);
    else if (type === LINE) this.mergeLine(child, parent);
    else if (type === LINESEGMENTS) this.mergeLineSegment(child, parent);
    else {
      /**
       * There shouldn't be any other types.
       * But I haven't checked this.
       */
    }
    /**
     * Check if recursion is needed
     */
    if (children.length === 0) return;
    /**
     * The current THREE.Object3D is also the parent.
     *
     * In other words:
     * If a parent is missing, then we are the parent.
     */
    if (parent === undefined) parent = child;
    /**
     *
     */
    children.forEach((grandChild) => {
      /**
       * N.B. A THREE.Object3D might have nested children - i.e. Great Grand Children (GGC).
       *
       * For example:
       * A mesh (wall) might contain another mesh (opening).
       *
       */
      grandChild.children.forEach((greatGrandChild) => {
        /**
         * The "parent" is now the GC.
         */
        this.merge(greatGrandChild, grandChild);
      });
      /**
       * Please note:
       *
       * The parent is unknown!
       * Both GC and GGC can use this function.
       *
       * The "parent" can therefore refer to different objects.
       * Be very careful with this approach.
       */
      this.merge(grandChild, parent);
    });
  }
  /**
   * All meshes must use bufferGeometry.
   * Also, all meshes should be BufferGeometry since r125
   */
  mergeMesh(child, parent) {
    const {
      geometry: childGeometry,
      geometry: { type },
      material,
      material: { uuid: id }
    } = child;
    const bufferGeometry =
      type === 'BufferGeometry'
        ? childGeometry
        : new THREE.BufferGeometry().fromGeometry(childGeometry);
    const clone = bufferGeometry.clone();
    /**
     * Let's apply the transformation matrix.
     */
    parent === undefined ? clone.applyMatrix4(child.matrix) : clone.applyMatrix4(parent.matrix);
    /**
     * We will use the Three.js Material UUID to group the buffer geometries.
     * The material object (see above) will group the materials (depending on UUID).
     *
     * This approach might return some redundant result.
     * However, this will be fine - for the sake of simplicity.
     */

    this.meshes[id] === undefined
      ? (this.meshes[id] = new MaterialGroup(material, [clone]))
      : this.meshes[id].bufferGeometries.push(clone);
  }
  /**
   * Both Lines and LineSegments seem to have some trouble with the material.
   * It all comes down to what the "parent" refers to.
   *
   */
  mergeLine(child, parent) {
    const {
      geometry: bufferGeometry,
      material,
      material: { uuid: id }
    } = child;
    parent === undefined
      ? bufferGeometry.applyMatrix4(child.matrix)
      : bufferGeometry.applyMatrix4(parent.matrix);
    this.lines[id] === undefined
      ? (this.lines[id] = new MaterialGroup(material, [bufferGeometry]))
      : this.lines[id].bufferGeometries.push(bufferGeometry);
  }
  /**
   * Both Lines and LineSegments seem to have some trouble with the material.
   * It all comes down to what the "parent" refers to.
   */
  mergeLineSegment(child, parent) {
    const {
      geometry: edgesGeometry,
      material,
      material: { uuid: id }
    } = child;
    parent === undefined
      ? edgesGeometry.applyMatrix4(child.matrix)
      : edgesGeometry.applyMatrix4(parent.matrix);
    this.lineSegments[id] === undefined
      ? (this.lineSegments[id] = new MaterialGroup(material, [edgesGeometry]))
      : this.lineSegments[id].bufferGeometries.push(edgesGeometry);
  }
  /**
   * Create a group with:
   * - Merged meshes
   * - Merged lines
   * - Merged lineSegments
   */
  createGroup() {
    const group = new THREE.Group();
    Object.values(this.meshes)
      .filter((mesh) => mesh.material.opacity !== 0)
      .forEach((mesh) => {
        const { material, bufferGeometries } = mesh;
        const merged = BufferGeometryUtils.mergeBufferGeometries(bufferGeometries);
        const mergedMeshes = new THREE.Mesh(merged, material);
        group.add(mergedMeshes);
      });
    Object.values(this.lines).forEach((line) => {
      const { material, bufferGeometries } = line;
      const merged = BufferGeometryUtils.mergeBufferGeometries(bufferGeometries);
      const mergedLines = new THREE.Line(merged, material);
      group.add(mergedLines);
    });
    Object.values(this.lineSegments).forEach((lineSegment) => {
      const { material, bufferGeometries } = lineSegment;
      const merged = BufferGeometryUtils.mergeBufferGeometries(bufferGeometries);
      const mergedlineSegments = new THREE.LineSegments(merged, material);
      group.add(mergedlineSegments);
    });
    return group;
  }
  /**
   * Create a group with:
   * - Merged meshes
   * - Merged lines
   * - Merged lineSegments
   */
  createTransparentGroup(group) {
    const clone = group.clone();
    const { children } = clone;
    const options = {
      color: 0xcccccc,
      opacity: 0.5
    };
    const meshMaterial = new THREE.MeshBasicMaterial(options);
    children
      .filter((child) => child.type === MESH)
      .forEach((child) => (child.material = meshMaterial));
    return clone;
  }
}

export { Merger };
