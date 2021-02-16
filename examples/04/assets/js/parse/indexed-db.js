import { loadIfcFileItems, constructProject } from '../../../build/IFC.singleWorker.module.js';
import { saveStructuredSync } from '../save/save-structured.js';
import { toggleLoader } from '../utils/toggle-loader.js';

/**
 * The FileReader will be used as before (see Example 00)
 */
function parseIfcFile(input, myIfcFile) {
  WARN('IndexedDB transaction not found');
  INFO('Parsing IFC File');
  const reader = new FileReader();
  reader.onload = () => {
    toggleLoader(); // Start loading animation
    constructDummyWorker(reader.result, myIfcFile);
  };
  reader.readAsText(input.files[0]);
}
/**
 * This example DOESN'T use web workers.
 *
 * The following part is supposed to be executed by a so-called Web Worker.
 * This means that this part can run in the background - without blocking the UI thread.
 */
const constructDummyWorker = (ifcData, myIfcFile) => {
  const loaded = loadIfcFileItems(ifcData);
  const structured = constructProject(loaded);
  /**
   * There are many ways to copy an object in JavaScript.
   * See: https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object
   * 
   * Clarification:
   * We want a copy that is NOT referring to the original structured object.
   * If we were to keep the reference, the `buildScene` function would mess up the `saveStructured` function.
   * We would get an error like this:
   * '''
   *    DOMException:
   *    Failed to execute 'postMessage' on 'DedicatedWorkerGlobalScope':
   *    function onRotationChange() { quaternion.setFromEuler(rotation, false); } could not be cloned.
   * '''
   *
   * This is because the MainObject cannot be cloned using the structured clone algorithm.

   * In other words:
   * We don't want to save the MainObject to the IndexedDB.
   *
   * That's why we must create a copy (remember that the IndexedDB is asynchronous)
   * 
   * A dirty workaround:
   * I'm all for quick and dirty workarounds.
   * The easiest approach is to simply force a synchronous behavior
   * Yes, we might loose some performance - but it will be easier to demonstrate.
   *
   */
  saveStructuredSync(structured, myIfcFile);
};

export { parseIfcFile };
