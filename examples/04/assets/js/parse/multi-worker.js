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
 * We will only construct a Multi Web  Worker in this example
 */
function constructWorker(result, myIfcFile, fileSizeLimit) {
  constructMultiWorker(result, myIfcFile);
}

function constructMultiWorker(result, myIfcFile) {
  INFO('Constructing a Multi Web Worker...');
  const multiWorker = new Worker('../assets/js/web-worker/multi-worker.js');
  multiWorker.postMessage({ result, myIfcFile });
  multiWorker.onmessage = buildScene;
}

export { parseIfcFile };
