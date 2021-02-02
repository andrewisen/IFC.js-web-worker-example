import { buildGeometry, mainObject } from '../../../../../build/IFC.geometry.module.js';
import { scene, initScene } from './three-scene.js';
import { groupStructure } from '../optimization/group-structure.js';
// import { replaceMaterial } from '../optimization/replace-material.js';

function rebuildScene(structured) {
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  let { visible, hidden } = groupStructure(structured);
  const visibleGroup = new THREE.Group();
  visibleGroup.add(visible);
  const hiddenGroup = new THREE.Group();
  hiddenGroup.add(hidden);
  scene.add(visibleGroup);
  scene.add(hiddenGroup);
  initScene();
  document.getElementById('c').style.display = 'block';

  /// DEV
}
export { rebuildScene };
