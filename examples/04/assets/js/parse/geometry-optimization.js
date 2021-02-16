import { loadIfcFileItems, constructProject } from '../../../build/IFC.singleWorker.module.js';
import { saveStructuredSync } from '../save/save-structured.js';
import { toggleLoader } from '../utils/toggle-loader.js';
import { buildScene } from '../build-scene/build-and-group-scene.js';

/**
 * The FileReader will be used as before (see Example 00)
 */
function parseIfcFile(input, myIfcFile) {
  INFO('Parsing IFC File without a Web Worker');
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
  const dummyPostMessage = {};
  dummyPostMessage.data = structured;
  buildScene(dummyPostMessage);
};

export { parseIfcFile };
