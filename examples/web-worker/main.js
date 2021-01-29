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

import { IfcFile } from './assets/js/ifc-file.js';
import { parseIfcFile } from './assets/js/construct-worker.js';
import { toggleLoader } from './assets/js/utils.js';
import { IndexedDB } from './assets/js/indexed-db.js';
import { rebuildScene } from './assets/js/rebuild-scene.js';
import { simpleCheck } from './assets/js/simple-check.js';

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
  const { name, lastModified, size } = input.files[0];
  let myIfcFile = new IfcFile(name, lastModified, size);
  let indexedDB = new IndexedDB();
  /**
   * The IndexedDB API is mostly asynchronous.
   * The API doesn't give you data by returning values; instead, you have to pass a callback function.
   * You don't "store" a value into the database, or "retrieve" a value out of the database through synchronous means.
   * Instead, you "request" that a database operation happens.
   * You get notified by a DOM event when the operation finishes, and the type of event you get lets you know if the operation succeeded or failed.
   *
   * This sounds a little complicated at first, but there are sanity measures baked in.
   * It's not that different from the way that XMLHttpRequest works.
   *
   */
  const cb = () => {
    indexedDB.get(myIfcFile.name, function (ifcFile) {
      simpleCheck(ifcFile) ? parseIfcFile(input, myIfcFile) : rebuildScene(ifcFile.structured);
    });
  };
  indexedDB.init(cb);
}

readIfcFile();
document.getElementById('c').style.display = 'none';
toggleLoader();
