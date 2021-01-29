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
 * TODO
 */
import { IfcFile } from './assets/js/ifc-file.js';
/**
 * TODO
 */
import { constructSingleWorker, constructMultiWorker } from './assets/js/construct-worker.js';
/**
 * TODO
 */
import { toggleLoader } from './assets/js/utils.js';

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
  const { name, lastModified, size } = input.files[0];
  let myIfcFile = new IfcFile(name, lastModified, size);
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
    if (myIfcFile.size < fileSizeLimit) {
      constructSingleWorker(reader.result, myIfcFile);
    } else {
      constructMultiWorker(reader.result, myIfcFile);
    }
  };
  reader.readAsText(input.files[0]);
}

readIfcFile();
document.getElementById('c').style.display = 'none';
toggleLoader();
