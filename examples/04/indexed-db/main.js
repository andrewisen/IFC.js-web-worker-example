/**
 * INDEXED DB
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 * And: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
 *
 */

// SHARED
import { rebuildScene } from '../assets/js/build-scene/rebuild-scene.js';
import { IfcFile } from '../assets/js/utils/ifc-file.js';
import { toggleLoader } from '../assets/js/utils/toggle-loader.js';
import { simpleCheck } from '../assets/js/utils/simple-check.js';
import { TIME_LABEL } from '../assets/js/utils/global-variables.js';
// UNIQUE
import { parseIfcFile } from '../assets/js/parse/indexed-db.js';
import { IndexedDB } from '../assets/js/indexed-db/indexed-db.js';

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
 * The IndexedDB API is mostly asynchronous.
 *
 * In Other Words:
 * The API doesn't give you data by returning values; instead, you have to pass a callback function.
 *
 * Clarification:
 * You don't "store" a value into the database, or "retrieve" a value out of the database through synchronous means.
 *
 * Instead, you "request" that a database operation happens.
 * You get notified by a DOM event when the operation finishes, and the type of event you get lets you know if the operation succeeded or failed.
 *
 * This sounds a little complicated at first, but there are sanity measures baked in.
 * It's not that different from the way that XMLHttpRequest works.
 */
function readFile(input) {
  console.time(TIME_LABEL);
  const { name, lastModified, size } = input.files[0];
  let myIfcFile = new IfcFile(name, lastModified, size);
  let indexedDB = new IndexedDB();

  // This is our callback function...
  const callback = () => {
    indexedDB.get(myIfcFile.name, function (ifcFile) {
      simpleCheck(ifcFile) ? parseIfcFile(input, myIfcFile) : rebuildScene(ifcFile.structured);
    });
  };
  // ...we pass it into the init function
  indexedDB.init(callback);
}

readIfcFile();
document.getElementById('c').style.display = 'none';
toggleLoader();
LOG('IndexedDB Example');
WARN('N.B. You must update (or delete) the IndexedDB manually.');
