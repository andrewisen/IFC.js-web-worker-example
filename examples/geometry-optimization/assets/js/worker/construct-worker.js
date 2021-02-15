import { buildScene } from '../scene/build-scene.js';
import { toggleLoader } from '../utils/utils.js';
/**
 * Read file from FileReader
 */
const parseIfcFile = (input, myIfcFile) => {
  toggleLoader();
  const reader = new FileReader();
  reader.onload = () => constructWorker(reader.result, myIfcFile);
  reader.readAsText(input.files[0]);
};
/**
 * N.B. THE single Web Worker has been disabled
 */
const constructWorker = (result, myIfcFile) => constructMultiWorker(result, myIfcFile);
/**
 * Construct many workers and allow for multithreading
 */
const constructMultiWorker = (result, myIfcFile) => {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.onmessage = buildScene;
  multiWorker.postMessage({ result, myIfcFile });
};

export { parseIfcFile };
