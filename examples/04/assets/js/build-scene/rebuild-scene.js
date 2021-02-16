import { buildGeometry, mainObject } from '../../../build/IFC.geometry.module.js';
/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It might give an error otherwise - I have no idea why...
 */
import { scene, animate } from '../scene/regular/three-scene.js';
import { toggleLoader } from '../utils/toggle-loader.js';
import { TIME_LABEL } from '../utils/global-variables.js';

/**
 * Rebuild the Three.js
 * Note: The UI will freeze :(
 */
function rebuildScene(structured) {
  WARN('IndexedDB transaction found!');
  INFO('Rebuilding scene');
  structured.MainObject = mainObject; // Add back the mainObject
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  console.timeEnd(TIME_LABEL);
}

export { rebuildScene };
