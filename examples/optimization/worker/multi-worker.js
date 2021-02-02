importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.multiWorker.js');
importScripts('./utils/custom-ifc-types.js');
importScripts('./save/indexed-db.js');
importScripts('./save/save-structured.js');
var loaded = {};
var hidden = {};
var running = 0;
var myIfcFile;
onmessage = (e) => {
  const { result: ifcData, myIfcFile: _myIfcFile } = e.data;
  myIfcFile = _myIfcFile;
  const { dataSection } = IFCjs.extractSections(ifcData);
  for (const [ifcTypesGroupName, ifcTypesGroup] of Object.entries(ifcTypesGroups)) {
    constructWebWorker(dataSection, ifcTypesGroupName, ifcTypesGroup);
  }
};
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
function workerDone(e) {
  const hiddenBuildingElements = '_hiddenBuildingElements';
  const { loaded: _loaded, ifcTypesGroupName } = e.data;
  if (ifcTypesGroupName === hiddenBuildingElements) {
    Object.assign(hidden, _loaded);
  }
  Object.assign(loaded, _loaded);
  --running;
  if (running === 0) {
    IFCjs.bindEntities(loaded);
    const structured = IFCjs.constructProject(loaded);
    saveStructured(structured, myIfcFile);
    postMessage(structured);
  }
}
