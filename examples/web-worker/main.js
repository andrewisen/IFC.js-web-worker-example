/**
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
 *
 * And:
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
 *
 * Modified code from:
 * https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js
 *
 */

/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It will give an error otherwise.
 */
import { buildGeometry, mainObject } from '../../build/IFC.geometry.module.js';
/**
 * Three.js scene
 */
import { scene, animate } from './three-scene.js';

/**
 * From Example 00
 */
export function readIfcFile() {
  const input = document.querySelector('input[type="file"]');
  input.addEventListener(
    'change',
    (e) => {
      readFile(input);
    },
    false
  );
}
function readFile(input) {
  const reader = new FileReader();
  reader.onload = () => {
    toggleLoader();
    const ifcWorker = new Worker('worker.js'); // Assume Web Worker is supported
    ifcWorker.postMessage(reader.result); // See the file "worker.js"
    ifcWorker.onmessage = function (e) {
      let structured = e.data; // This is the data from the web worker, i.e. postMessage()
      structured.MainObject = mainObject; // Add back the mainObject
      structured = buildGeometry(structured);
      scene.add(structured.MainObject);
      animate();
      document.getElementById('c').style.display = 'block';
      toggleLoader();
    };
  };
  reader.readAsText(input.files[0]);
}

/**
 * Show or hide the Loader
 */
function toggleLoader() {
  var element = document.getElementById('loading');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

readIfcFile();
document.getElementById('c').style.display = 'none';
toggleLoader();
