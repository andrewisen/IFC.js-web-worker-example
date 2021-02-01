/**
 * Please note that FireFox doesn't support module workers.
 * We will use the regular importScripts().
 * That's why we import the regular builds (not "IFC.module.js").
 *
 * Also, make sure to import IFC.js last.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#importing_scripts_and_libraries
 */
importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.multiWorker.js');
importScripts('./utils/custom-ifc-types.js');
importScripts('./save/indexed-db.js');
importScripts('./save/save-structured.js');

var loaded = {};
var running = 0;
var myIfcFile;
onmessage = (e) => {
  /**
   * This is a rewrite of loadIfcFileItems (src/ifc-parser/ifc-services/ifc-processor.js)
   */
  const { result: ifcData, myIfcFile: _myIfcFile } = e.data;
  myIfcFile = _myIfcFile; // Global variable
  const { dataSection } = IFCjs.extractSections(ifcData);
  /**
   * We will construct a Web Worker for each GROUP of ifcTypes.
   *
   * In layman's terms:
   * - buildingElements will have its own Web Worker
   * - properties will have its own Web Worker
   * - materials will have its own Web Worker
   * - etc. etc.
   */
  for (const [ifcTypesGroupName, ifcTypesGroup] of Object.entries(ifcTypesGroups)) {
    constructWebWorker(dataSection, ifcTypesGroupName, ifcTypesGroup);
  }
};

/**
 * The specific Web Worker will only deal with a certain group of IfcTypes.
 * For example; the group "material" will only handle:
 * - IfcMaterial
 * - IfcMaterialLayer
 * - IfcMaterialLayerSet
 * - IfcMaterialLayerSetUsage
 * - IfcMaterialList
 *
 * Also, see: https://stackoverflow.com/a/18192122/14353202
 */
const constructWebWorker = (dataSection, ifcTypesGroupName, ifcTypesGroup) => {
  const specificWorker = new Worker('specific-worker.js');
  ++running;
  specificWorker.onmessage = workerDone;
  specificWorker.postMessage({
    dataSection,
    ifcTypesGroupName,
    ifcTypesGroup
  });
};
/**
 * See: https://stackoverflow.com/a/18192122/14353202
 */
function workerDone(e) {
  /**
   * Append the loaded result from the specific Web Worker
   */
  const _loaded = e.data.loaded;
  Object.assign(loaded, _loaded);
  --running;
  if (running === 0) {
    /**
     * We have used specific Web Workers to build the loaded data.
     * Thus, we are missing references to other entities.
     */
    IFCjs.bindEntities(loaded);
    /**
     * The Web Worker cannot post the MainObject.
     * It will give the following error:
     * '''
     *    DOMException:
     *    Failed to execute 'postMessage' on 'DedicatedWorkerGlobalScope':
     *    function onRotationChange() { quaternion.setFromEuler(rotation, false); } could not be cloned.
     * '''
     *
     * This is because MainObject cannot be cloned using the structured clone algorithm.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
     * And: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#sending_messages_to_and_from_a_dedicated_worker
     */
    const structured = IFCjs.constructProject(loaded);
    saveStructured(structured, myIfcFile);
    postMessage(structured);
  }
}
