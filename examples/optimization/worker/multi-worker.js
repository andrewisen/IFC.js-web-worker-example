importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.multiWorker.js');
importScripts('./utils/custom-ifc-types.js');
importScripts('./save/indexed-db.js');
importScripts('./save/save-structured.js');
var loaded = {};
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
const workerDone = (e) => {
  const { loaded: _loaded, ifcTypesGroupName } = e.data;
  Object.assign(loaded, _loaded);
  --running;
  if (running !== 0) return;
  IFCjs.bindEntities(loaded);
  const structured = IFCjs.constructProject(loaded);
  saveStructured(structured, myIfcFile);
  postMessage(structured);
};
