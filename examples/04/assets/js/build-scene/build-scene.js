import { buildGeometry, mainObject } from '../../../build/IFC.geometry.module.js';
/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It might give an error otherwise - I have no idea why...
 */
import { scene, animate } from '../scene/regular/three-scene.js';
import { toggleLoader } from '../utils/toggle-loader.js';
import { TIME_LABEL } from '../utils/global-variables.js';

/**
 * Build the Three.js scene from the Web Worker
 */
function buildScene(e) {
  INFO('Building scene...');
  let structured = e.data; // This is the data from the web worker, i.e. postMessage()
  structured.MainObject = mainObject; // Add back the mainObject
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  toggleLoader(); // End loading animation
  console.timeEnd(TIME_LABEL);
}

export { buildScene };
