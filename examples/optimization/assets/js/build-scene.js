import { buildGeometry, mainObject } from '../../../../build/IFC.geometry.module.js';
import { scene, animate } from './three-scene.js';
import { toggleLoader } from './utils.js';
function buildScene(e) {
  let structured = e.data;
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  toggleLoader();
  console.timeEnd('TOTAL:');
}
export { buildScene };
