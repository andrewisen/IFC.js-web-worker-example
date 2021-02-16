/**
 * We're importing the "BufferGeometryUtils" from a CDN.
 * You would normally include this from "node_modules" (or a similar manner)
 **/
import { BufferGeometryUtils } from 'https://unpkg.com/three/examples/jsm/utils/BufferGeometryUtils.js';
/**
 * These constants shouldn't change, but you can never be too sure :)
 */
const MESH = 'Mesh';
const LINE = 'Line';
const LINESEGMENTS = 'LineSegments';
/**
 * A single object/geometry is either a door, roof, floor, etc.
 * And, each geometry has a certain material.
 *
 * For example:
 * All (or most) floors, ceilings, roofs, stairs, etc. will have the SAME material.
 * We can therefore group all objects/geometries based on the material UUID.
 *
 * The property "material" referees to original Three.js material object.
 * For example, a "LineBasicMaterial", "MeshBasicMaterial", "MeshLambertMaterial", etc.
 *
 * The property "bufferGeometries" is an array with all geometries that share the aforementioned material.
 */
class MaterialGroup {
  constructor(material, bufferGeometries) {
    this.material = material;
    this.bufferGeometries = bufferGeometries;
  }
}
/**
 * The Merger class will do all the heavy lifting.
 * It will merge all geometries and return a two groups, a regular group and a transparent group.
 *
 * 1. The regular group will be single mesh - i.e. a merged object.
 * 2. The transparent group will be identical to the regular group, but the material is "transparent".
 *
 * We'll switch between these two groups during the object picking.
 * When we select a single object, the rest becomes transparent.
 */
class Merger {
  constructor(structured) {
    this.structured = structured;
    this.meshes = {};
    this.lines = {};
    this.lineSegments = {};
  }
  /**
   * Merge geometries and return a regular and transparent group
   */
  mergeGeometries() {
    const { children } = this.structured;
    children.forEach((child) => this.mergeGeometry(child));
    const group = this.createGroup();
    const transparentGroup = this.createTransparentGroup(group);
    return { group, transparentGroup };
  }
  /**
   * "Object3D" is the base class for most objects in Three.js.
   * The class provides a set of properties and methods for manipulating objects in 3D space.
   * The property "children" is an array with object's children.
   *
   * This means that we have to take the children and grandchildren into account.
   *
   */
  mergeGeometry(parent) {
    /**
     * First, we're going to check if the PARENT has children.
     */
    const { children } = parent;
    /**
     * This is not the new Matrix (2021) movie.
     * No, this is a 4x4 transformation matrix.
     *
     * We will apply this matrix on each "bufferGeometry".
     */
    const matrix = parent.matrix;
    if (children.length !== 0) {
      children.forEach((child) => {
        /**
         * Then, we should check if each child has its own CHILD.
         * I.e. We should check for GRANDCHILDREN
         */
        const { children: grandChildren } = child;
        if (grandChildren.length !== 0) {
          grandChildren.forEach((grandChild) => {
            /**
             * These are objects are almost alway "LineSegments" that belongs to a mesh.
             *
             * For example: The edges around a door.
             */
            this.merge(matrix);
          });
        }
        /**
         * These objects are usually "meshes"
         */
        this.merge(child, matrix);
      });
    }
    this.merge(parent, matrix);
  }
  /**
   * We will do a simply check before we merge.
   * Three.js has "meshes", "lines", and "lineSegments", and other things.
   *
   * They behave slightly different. I have slip them up for the sake of simplicity.
   */
  merge(object3D, matrix) {
    const { type } = object3D;
    if (type === MESH) this.mergeMesh(object3D, matrix);
    else if (type === LINE) this.mergeLine(object3D, matrix);
    else if (type === LINESEGMENTS) this.mergeLineSegment(object3D, matrix);
    else {
      /**
       * There shouldn't be any other types.
       * But I haven't checked this.
       */
    }
  }
  /**
   * N.B. All meshes must be a "bufferGeometry".
   * Also, all meshes should already be BufferGeometry since r125.
   *
   * We cannot merge meshes that aren't "bufferGeometry".
   */
  mergeMesh(object3D, matrix) {
    const {
      geometry,
      geometry: { type },
      material,
      material: { uuid: id }
    } = object3D;
    const bufferGeometry =
      type === 'BufferGeometry' ? geometry : new THREE.BufferGeometry().fromGeometry(geometry);
    /**
     * We must clone the object.
     * Otherwise we are going to make changes to the original object.
     *
     * To clarify:
     * The original geometry is still available, but it's completely hidden.
     * Check the `build-and-group-scene.js` file. Notice that we create a hidden group.
     * This hidden group is the original object.
     * We use the hidden group to allow us to select an object.
     *
     * The object picker simply picks a hidden object.
     *
     * That's why we need to clone the bufferGeometry.
     * Otherwise, the hidden object have the "applyMatrix4" applied to it as well.
     */
    const clone = bufferGeometry.clone();
    clone.applyMatrix4(matrix);
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
   * This might result in some errors, but it works for now :)
   */
  mergeLine(object3D, matrix) {
    const {
      geometry: bufferGeometry,
      material,
      material: { uuid: id }
    } = object3D;
    /**
     * We must clone the object.
     * Otherwise we are going to make changes to the original object.
     *
     * To clarify:
     * The original geometry is still available, but it's completely hidden.
     * Check the `build-and-group-scene.js` file. Notice that we create a hidden group.
     * This hidden group is the original object.
     * We use the hidden group to allow us to select an object.
     *
     * The object picker simply picks a hidden object.
     *
     * That's why we need to clone the bufferGeometry.
     * Otherwise, the hidden object have the "applyMatrix4" applied to it as well.
     */
    const clone = bufferGeometry.clone();
    clone.applyMatrix4(matrix);
    this.lines[id] === undefined
      ? (this.lines[id] = new MaterialGroup(material, [clone]))
      : this.lines[id].bufferGeometries.push(clone);
  }
  /**
   * Both LineSegments and Lines seem to have some trouble with the material.
   * It all comes down to what the "parent" refers to.
   *
   * This might result in some errors, but it works for now :)
   */
  mergeLineSegment(object3D, matrix) {
    const {
      geometry: edgesGeometry,
      material,
      material: { uuid: id }
    } = object3D;
    /**
     * We must clone the object.
     * Otherwise we are going to make changes to the original object.
     *
     * To clarify:
     * The original geometry is still available, but it's completely hidden.
     * Check the `build-and-group-scene.js` file. Notice that we create a hidden group.
     * This hidden group is the original object.
     * We use the hidden group to allow us to select an object.
     *
     * The object picker simply picks a hidden object.
     *
     * That's why we need to clone the edgesGeometry.
     * Otherwise, the hidden object have the "applyMatrix4" applied to it as well.
     */
    const clone = edgesGeometry.clone();
    clone.applyMatrix4(matrix);
    this.lineSegments[id] === undefined
      ? (this.lineSegments[id] = new MaterialGroup(material, [clone]))
      : this.lineSegments[id].bufferGeometries.push(clone);
  }
  /**
   * Create a group with:
   * - Merged Meshes
   * - Merged Lines
   * - Merged LineSegments
   *
   * Also, we only want to merge visible objects.
   * For example, IfcSpaces are hidden entities that we do not want to merge.
   *
   * Yes, we have some repeating code below.
   * But we're going to keep this for the sake of simplicity
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
   * Create a group with "transparent" objects.
   * We can control how the meshes and lines behave, see `meshMaterial` and `lineMaterial`.
   *
   * Also, we'll leave out simple lines.
   */
  createTransparentGroup(group) {
    /**
     * We must clone the group.
     * Otherwise we're going to make changes to the original group.
     */
    const clone = group.clone();
    const { children } = clone;
    const meshMaterial = new THREE.MeshBasicMaterial({
      color: 0xcccccc,
      opacity: 0.5
    });
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x000000,
      opacity: 1
    });
    children
      .filter((child) => child.type === MESH)
      .forEach((child) => (child.material = meshMaterial));
    children
      .filter((child) => child.type === LINESEGMENTS)
      .forEach((child) => (child.material = lineMaterial));
    return clone;
  }
}

export { Merger };
