importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.singleWorker.js');
importScripts('./save/indexed-db.js');
importScripts('./save/save-structured.js');
onmessage = (e) => {
  const { result: ifcData, myIfcFile } = e.data;
  const loaded = IFCjs.loadIfcFileItems(ifcData);
  const structured = IFCjs.constructProject(loaded);
  saveStructured(structured, myIfcFile);
  postMessage(structured);
};
