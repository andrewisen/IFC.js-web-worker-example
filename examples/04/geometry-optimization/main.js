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

// SHARED
import { IfcFile } from '../assets/js/utils/ifc-file.js';
import { toggleLoader } from '../assets/js/utils/toggle-loader.js';
import { simpleCheck } from '../assets/js/utils/simple-check.js';
import { TIME_LABEL } from '../assets/js/utils/global-variables.js';
// UNIQUE
import { parseIfcFile } from '../assets/js/parse/geometry-optimization.js';

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
  console.time(TIME_LABEL);
  const { name, lastModified, size } = input.files[0];
  const myIfcFile = new IfcFile(name, lastModified, size);
  /**
   * In the example `indexed-db` we use this to whether to parse or rebuild the scene.
   *
   * For this example, we will always parse the IFC file.
   */
  simpleCheck(undefined) ? parseIfcFile(input, myIfcFile) : parseIfcFile(input, myIfcFile);
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
export { readIfcFile };
LOG('Geometry Optimization Example');
