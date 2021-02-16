import { buildScene } from '../build-scene/build-scene.js';
import { toggleLoader } from '../utils/toggle-loader.js';
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
 * We will only construct a Single Web  Worker in this example
 */
function constructWorker(result, myIfcFile, fileSizeLimit) {
  constructSingleWorker(result, myIfcFile);
}
/**
 * Start by looking at how the single Web Worker works.
 */
function constructSingleWorker(result, myIfcFile) {
  INFO('Constructing a Single Web Worker...');
  const singleWorker = new Worker('../assets/js/web-worker/single-worker.js');
  singleWorker.postMessage({ result, myIfcFile });
  singleWorker.onmessage = buildScene;
}

export { parseIfcFile };
