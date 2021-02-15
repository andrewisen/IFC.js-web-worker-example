import { TIME_LABEL, DEV } from '../../../main.js';
import { buildGeometry, mainObject } from '../../../../build/IFC.geometry.module.js';
import { scene, initScene } from './three-scene.js';
import { toggleLoader } from '../utils/utils.js';
import { Merger } from '../optimization/merge-geometries.js';
/**
 * Get the structured data from the Web Worker and build the geometry.
 */
const buildScene = (e) => {
  let structured = e.data;
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  group(structured);
  animate();
};
/**
 * Group geometry into:
 * 1. Hidden
 * 2. Visible
 * 3. Transparent
 */
const group = (structured) => {
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
  /**
   * Generate merged meshes
   */
  const merger = new Merger(structured.MainObject);
  const { group: visibleGroup, transparentGroup } = merger.mergeGeometries(); // Change to hidden group
  /**
   * Visible Group
   */
  visibleGroup.name = 'visibleGroup';
  scene.add(visibleGroup);
  /**
   * Transparent Group
   */
  transparentGroup.name = 'transparentGroup';
  transparentGroup.visible = false;
  scene.add(transparentGroup);
};
/**
 * Start the scene and toggle loader
 */
const animate = () => {
  initScene();
  document.getElementById('c').style.display = 'block';
  toggleLoader();
  if (DEV) console.time(TIME_LABEL);
};

export { buildScene, group, animate };
