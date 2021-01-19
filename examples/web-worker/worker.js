/**
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#importing_scripts_and_libraries
 */
importScripts('../libs/chevrotain.min.js');
// importScripts('../libs/three.js');
/**
 * NB. We import the regular build.
 * Also, make sure to import "IFC.js" last (!)
 */
importScripts('../../build/IFC.worker.js');
onmessage = (e) => {
  const ifcData = e.data; // See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#sending_messages_to_and_from_a_dedicated_worker
  const loaded = IFCjs.loadIfcFileItems(ifcData);
  const structured = IFCjs.constructProject(loaded);

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
   * See:
   * https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
   */

  structured.MainObject = undefined; // bye bye

  /**
   * See: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#sending_messages_to_and_from_a_dedicated_worker
   */
  postMessage(structured);
};