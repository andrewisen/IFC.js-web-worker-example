/**
 * The logic is the same as the Web Worker example.
 * I have removed all comments that are related to that example.
 *
 * Go to:
 * - examples/optimization/assets/js/scene/build-scene.js
 * - examples/optimization/assets/js/scene/rebuild-scene.js
 *
 * Both files use the groupStructure function.
 * It's a very simple function to split the geometry into two groups, visible and hidden.
 *
 * The scene is updated to only animate on demand.
 * When an update is requested, it will hide the so-called hidden geometry,
 *
 * See:
 * - examples/optimization/assets/js/scene/three-scene.js
 */
import { IfcFile } from './assets/js/utils/ifc-file.js';
import { parseIfcFile } from './assets/js/worker/construct-worker.js';
import { toggleLoader } from './assets/js/utils/utils.js';
import { IndexedDB } from './assets/js/database/indexed-db.js';
import { rebuildScene } from './assets/js/scene/rebuild-scene.js';
import { simpleCheck } from './assets/js/worker/simple-check.js';
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
