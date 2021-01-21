/**
 * WEB WORKERS
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
 *
 * And: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
 *
 * Also: https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js
 *
 */

/**
 * Make sure to include the Geometry bundle BEFORE (!) the scene.
 * It might give an error otherwise - I have no idea why...
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

/**
 * We will assume that Web Workers are supported.
 * Depending on the file size, we want to use multiple web workers.
 *
 * In other words:
 * There is no need to use multiple Web Works on small files.
 */
function readFile(input) {
  /**
   * Experiment with a fileSizeLimit that feels good :)
   */
  const fileSize = input.files[0].size;
  const fileSizeLimit = 10485760; // 10 MB limit
  /**
   * The FileReader will be used as before
   */
  const reader = new FileReader();
  reader.onload = () => {
    toggleLoader(); // Start loading animation
    console.time('TOTAL:');
    if (fileSize < fileSizeLimit) {
      constructSingleWorker(reader.result);
    } else {
      constructMultiWorker(reader.result);
    }
  };
  reader.readAsText(input.files[0]);
}

/**
 * Start by looking at how the single Web Worker works.
 */
function constructSingleWorker(result) {
  const singleWorker = new Worker('worker/single-worker.js');
  singleWorker.postMessage(result); // See the file "worker.js"
  singleWorker.onmessage = buildScene;
}
/**
 * The Multi Web Worker works in a similar way.
 * But I recommend that you start with the Single Web Worker
 */
function constructMultiWorker(result) {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.postMessage(result); // See the file "worker.js"
  multiWorker.onmessage = buildScene;
}

function buildScene(e) {
  let structured = e.data; // This is the data from the web worker, i.e. postMessage()
  structured.MainObject = mainObject; // Add back the mainObject
  structured = buildGeometry(structured);
  scene.add(structured.MainObject);
  animate();
  document.getElementById('c').style.display = 'block';
  toggleLoader(); // End loading animation
  console.timeEnd('TOTAL:');
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
