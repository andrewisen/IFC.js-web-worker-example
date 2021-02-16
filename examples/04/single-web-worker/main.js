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

// SHARED
import { IfcFile } from '../assets/js/utils/ifc-file.js';
import { toggleLoader } from '../assets/js/utils/toggle-loader.js';
import { simpleCheck } from '../assets/js/utils/simple-check.js';
import { TIME_LABEL } from '../assets/js/utils/global-variables.js';
// UNIQUE
import { parseIfcFile } from '../assets/js/parse/single-worker.js';

/**
 * This is the same as before.
 * See Example 00
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
 * To clarify:
 * There is no need to use multiple Web Works on small files.
 */
function readFile(input) {
  console.time(TIME_LABEL);
  const { name, lastModified, size } = input.files[0];
  let myIfcFile = new IfcFile(name, lastModified, size);
  /**
   * In the example `indexed-db` we use this to whether to parse or rebuild the scene.
   *
   * For this example, we will always parse the IFC file.
   */
  simpleCheck(undefined) ? parseIfcFile(input, myIfcFile) : parseIfcFile(input, myIfcFile);
}

readIfcFile();
document.getElementById('c').style.display = 'none';
toggleLoader();
LOG('Single Web Worker Example');
