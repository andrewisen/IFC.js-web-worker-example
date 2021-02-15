import { buildGeometry, mainObject } from '../../../build/IFC.geometry.module.js';
/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It might give an error otherwise - I have no idea why...
 */
import { scene, animate } from './three-scene.js';
import { toggleLoader } from './utils.js';

/**
 * Rebuild the Three.js
 * Note: The UI will freeze :(
 */
function rebuildScene(structured) {
  console.time('TOTAL:');
  structured.MainObject = mainObject; // Add back the mainObject
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  console.timeEnd('TOTAL:');
}

export { rebuildScene };
