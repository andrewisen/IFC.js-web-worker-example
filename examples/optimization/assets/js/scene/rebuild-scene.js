import { buildGeometry, mainObject } from '../../../../../build/IFC.geometry.module.js';
import { group, animate } from './build-scene.js';
/**
 * See build-scene.js
 */
const rebuildScene = (structured) => {
  structured.MainObject = mainObject;
  structured = buildGeometry(structured);
  group(structured);
  animate();
};

export { rebuildScene };
