/**
 * The logic is the same as the Web Worker example.
 * I have removed all comments related to that example.
 *
 * We will focus on the `assets/js/three-js.js` file.
 */
import { IfcFile } from './assets/js/ifc-file.js';
import { parseIfcFile } from './assets/js/construct-worker.js';
import { toggleLoader } from './assets/js/utils.js';
import { IndexedDB } from './assets/js/indexed-db.js';
import { rebuildScene } from './assets/js/rebuild-scene.js';
import { simpleCheck } from './assets/js/simple-check.js';
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
function readFile(input) {
  const { name, lastModified, size } = input.files[0];
  let myIfcFile = new IfcFile(name, lastModified, size);
  let indexedDB = new IndexedDB();
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
