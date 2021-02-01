importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.specificWorker.js');
onmessage = (e) => {
  //// DEBUG ////
  console.time(e.data.ifcTypesGroupName);
  //// DEBUG ////
  const ifcTypes = Object.values(e.data.ifcTypesGroup).map((ifcType) => {
    return ifcType;
  });
  let ifcItems = [];
  const flatIfcItemList = IFCjs.separateIfcEntities(e.data.dataSection);
  flatIfcItemList.forEach((e) => {
    const ifcType = IFCjs.getIfcType(e);
    if (ifcTypes.includes(ifcType) === false) return;
    const ifcObject = {
      [IFCjs.i.expressId]: IFCjs.getId(e),
      [IFCjs.i.type]: ifcType,
      [IFCjs.i.properties]: IFCjs.getIfcRawProperties(e)
    };
    ifcItems.push(ifcObject);
  });
  const loaded = loadItems(ifcItems);
  //// DEBUG ////
  console.timeEnd(e.data.ifcTypesGroupName);
  //// DEBUG ////
  postMessage({ loaded, ifcTypesGroupName: e.data.ifcTypesGroupName });
};
function loadItems(ifcData) {
  const loadedItems = {};
  ifcData.map((ifcItem) => {
    if (IFCjs.isTypeSupported(ifcItem)) {
      loadedItems[ifcItem[IFCjs.i.expressId]] = IFCjs.parseAndLoadItem(ifcItem);
    }
  });
  return loadedItems;
}
