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
/**
 * Constants
 */
const TIME_LABEL = 'Total';
const DEV = true;
/**
 * On input change, read the file.
 */
const readIfcFile = () => {
  const input = document.querySelector('input[type="file"]');
  input.addEventListener(
    'change',
    (e) => {
      readFile(input);
    },
    false
  );
};
/**
 * Read file either from FileReader or IndexedDB.
 */
const readFile = (input) => {
  if (DEV) console.time(TIME_LABEL);
  const { name, lastModified, size } = input.files[0];
  const myIfcFile = new IfcFile(name, lastModified, size);
  const indexedDB = new IndexedDB();
  const cb = () => {
    indexedDB.get(myIfcFile.name, (ifcFile) => {
      DEV
        ? parseIfcFile(input, myIfcFile)
        : simpleCheck(ifcFile)
        ? parseIfcFile(input, myIfcFile)
        : rebuildScene(ifcFile.structured);
    });
  };
  indexedDB.init(cb);
};
/**
 * Add event listener and toggle loader.
 */
const main = () => {
  readIfcFile();
  document.getElementById('c').style.display = 'none';
  toggleLoader();
};
main();
export { readIfcFile, TIME_LABEL, DEV };
