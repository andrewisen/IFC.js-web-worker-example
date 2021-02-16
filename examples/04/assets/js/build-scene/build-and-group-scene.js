import { buildGeometry, mainObject } from '../../../build/IFC.geometry.module.js';
import { scene, initScene } from '../scene/optimized/three-scene.js';
import { toggleLoader } from '../utils/toggle-loader.js';
import { Merger } from '../optimization/merge-geometries.js';
import { TIME_LABEL } from '../utils/global-variables.js';
/**
 * Get the structured data from the Web Worker and build the geometry.
 */
const buildScene = (e) => {
  let structured = e.data;
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  group(structured);
  animate();
  INFO('PRESS "ESC" to exit the object picking mode');
};
/**
 * Group geometry into:
 * 1. Hidden
 * 2. Visible
 * 3. Transparent
 */
const group = (structured) => {
  INFO('Grouping Geometry...');
  /**
   * Hidden Group
   */
  const hiddenGroup = new THREE.Group();
  hiddenGroup.add(structured.MainObject);
  hiddenGroup.children[0].children.forEach((child) => {
    child.visible = false;
  });
  hiddenGroup.name = 'hiddenGroup';
  hiddenGroup.renderOrder = 1;
  scene.add(hiddenGroup);
  console.log('Add HIDDEN geometry');
  /**
   * Generate merged meshes
   */
  INFO('Merging VISIBLE geometry...');
  const merger = new Merger(structured.MainObject);
  const { group: visibleGroup, transparentGroup } = merger.mergeGeometries(); // Change to hidden group
  /**
   * Visible Group
   */
  visibleGroup.name = 'visibleGroup';
  scene.add(visibleGroup);
  console.log('Add visible geometry');
  /**
   * Transparent Group
   */
  transparentGroup.name = 'transparentGroup';
  transparentGroup.visible = false;
  scene.add(transparentGroup);
  console.log('Add TRANSPARENT geometry (used during object picking)');
};
/**
 * Start the scene and toggle loader
 */
const animate = () => {
  initScene();
  document.getElementById('c').style.display = 'block';
  toggleLoader();
  console.timeEnd(TIME_LABEL);
};

export { buildScene, group, animate };
