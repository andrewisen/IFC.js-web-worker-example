import { buildGeometry, mainObject } from '../../../build/IFC.geometry.module.js';
/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It might give an error otherwise - I have no idea why...
 */
import { scene, animate } from './three-scene.js';
import { toggleLoader } from './utils.js';
// import { saveScene } from './save-scene.js';

/**
 * Build the Three.js scene from the Web Worker
 */
function buildScene(e) {
  let structured = e.data; // This is the data from the web worker, i.e. postMessage()
  structured.MainObject = mainObject; // Add back the mainObject
  console.time('buildGeometry');
  structured = buildGeometry(structured);
  console.timeEnd('buildGeometry');
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  toggleLoader(); // End loading animation
  console.timeEnd('TOTAL:');
}

export { buildScene };
