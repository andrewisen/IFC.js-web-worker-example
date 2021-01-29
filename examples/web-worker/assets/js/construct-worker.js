import { buildScene } from './build-scene.js';
import { toggleLoader } from './utils.js';
/**
 * We want to use multiple web workers depending on the file size.
 *
 * To clarify:
 * There is no need to use multiple Web Works on small files.
 */
function parseIfcFile(input, myIfcFile) {
  /**
   * Experiment with a fileSizeLimit that feels good :)
   * 10485760 (10 MB) is a good limit
   *
   * I have set the limit to zero for this demo.
   * This means that we will always use multiple Web Worker.
   */
  const fileSizeLimit = 0;
  /**
   * The FileReader will be used as before (see Example 00)
   */
  const reader = new FileReader();
  reader.onload = () => {
    toggleLoader(); // Start loading animation
    console.time('TOTAL:');
    constructWorker(reader.result, myIfcFile, fileSizeLimit);
  };
  reader.readAsText(input.files[0]);
}

/**
 * We could to some more checks here...
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
  singleWorker.postMessage({ result, myIfcFile }); // See the file "worker.js"
  multiWorker.onmessage = buildScene;
}
/**
 * The Multi Web Worker works in a similar way.
 * But I recommend that you start with the Single Web Worker
 */
function constructMultiWorker(result, myIfcFile) {
  const multiWorker = new Worker('worker/multi-worker.js');
  multiWorker.postMessage({ result, myIfcFile }); // See the file "worker.js"
  multiWorker.onmessage = buildScene;
}

export { parseIfcFile };
