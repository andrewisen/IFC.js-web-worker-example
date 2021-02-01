import { buildScene } from './build-scene.js';
import { toggleLoader } from './utils.js';

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

function constructWorker(result, myIfcFile, fileSizeLimit) {
  if (myIfcFile.size < fileSizeLimit) {
    constructSingleWorker(result, myIfcFile);
  } else {
    constructMultiWorker(result, myIfcFile);
  }
}

function constructSingleWorker(result, myIfcFile) {
  const singleWorker = new Worker('worker/single-worker.js');
  singleWorker.postMessage({ result, myIfcFile });
  multiWorker.onmessage = buildScene;
}

function constructMultiWorker(result, myIfcFile) {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.postMessage({ result, myIfcFile });
  multiWorker.onmessage = buildScene;
}

export { parseIfcFile };
