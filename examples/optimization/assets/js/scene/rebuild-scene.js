import { buildGeometry, mainObject } from '../../../../../build/IFC.geometry.module.js';
import { scene, initScene } from './three-scene.js';
import { groupStructure } from '../optimization/group-structure.js';
// import { replaceMaterial } from '../optimization/replace-material.js';

function rebuildScene(structured) {
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  /**
   * Split the structured into two groups: Visible & Hidden
   */
  let { visible, hidden } = groupStructure(structured);
  /**
   * Add visible objects to the first group
   */
  const visibleGroup = new THREE.Group();
  visibleGroup.add(visible);
  /**
   * Add hidden objects to the second group
   */
  const hiddenGroup = new THREE.Group();
  hiddenGroup.add(hidden);
  /**
   * Add both groups to the scene
   */
  scene.add(visibleGroup);
  scene.add(hiddenGroup);
  /**
   * Animate on demand
   */
  initScene();
  document.getElementById('c').style.display = 'block';

  /// DEV
}
export { rebuildScene };
