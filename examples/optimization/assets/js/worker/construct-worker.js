import { buildScene } from '../scene/build-scene.js';
import { toggleLoader } from '../utils/utils.js';

function parseIfcFile(input, myIfcFile) {
  const fileSizeLimit = 0;
  const reader = new FileReader();
  reader.onload = () => {
    toggleLoader();
    console.time('TOTAL:');
    constructWorker(reader.result, myIfcFile, fileSizeLimit);
  };
  reader.readAsText(input.files[0]);
}

/**
 * Single Web Worker has been disabled
 */
function constructWorker(result, myIfcFile, fileSizeLimit) {
  constructMultiWorker(result, myIfcFile);
}

// function constructSingleWorker(result, myIfcFile) {
//   const singleWorker = new Worker('worker/single-worker.js');
//   singleWorker.postMessage({ result, myIfcFile });
//   multiWorker.onmessage = buildScene;
// }

function constructMultiWorker(result, myIfcFile) {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.postMessage({ result, myIfcFile });
  multiWorker.onmessage = buildScene;
}

export { parseIfcFile };
