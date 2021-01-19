import { buildGeometry, mainObject } from '../../build/IFC.geometry.module.js';

/**
 * Three.js scene
 */
import { scene } from './three-scene.js';
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
    ifcWorker.postMessage(reader.result); // See "worker.js"
    ifcWorker.onmessage = function (e) {
      let structured = e.data; // This is sent from the web worker, postMessage()
      structured.MainObject = mainObject;
      structured = buildGeometry(structured);
      scene.add(structured.MainObject);
      toggleLoader();
    };
  };
  reader.readAsText(input.files[0]);
}

function toggleLoader() {
  var element = document.getElementById('loading');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

readIfcFile();
toggleLoader();
