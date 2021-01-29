import { buildScene } from './build-scene.js';
import { saveScene } from './save-scene.js';

/**
 * TODO
 */
function constructWorker(result, myIfcFile, fileSizeLimit) {
  if (myIfcFile.size < fileSizeLimit) {
    constructSingleWorker(result, myIfcFile);
  } else {
    constructMultiWorker(result, myIfcFile);
  }
}
/**
 * Start by looking at how the single Web Worker works.
 */
function constructSingleWorker(result, myIfcFile) {
  const singleWorker = new Worker('worker/single-worker.js');
  singleWorker.postMessage(result); // See the file "worker.js"
  multiWorker.onmessage = (e) => {
    buildScene(e);
    saveScene(e, myIfcFile);
  };
}
/**
 * The Multi Web Worker works in a similar way.
 * But I recommend that you start with the Single Web Worker
 */
function constructMultiWorker(result, myIfcFile) {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.postMessage(result); // See the file "worker.js"
  multiWorker.onmessage = (e) => {
    buildScene(e);
    saveScene(e, myIfcFile);
  };
}

export { constructSingleWorker, constructMultiWorker };
