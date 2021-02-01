import { buildGeometry, mainObject } from '../../../../build/IFC.geometry.module.js';
import { scene, animate } from './three-scene.js';
import { toggleLoader } from './utils.js';
function rebuildScene(structured) {
  console.time('TOTAL:');
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  console.timeEnd('TOTAL:');
}
export { rebuildScene };
