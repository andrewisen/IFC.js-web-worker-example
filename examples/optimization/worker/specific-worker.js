/**
 * Constants
 *
 * N.B. Module import to Web Workers is not supported by all browsers.
 * This is independent from the one in main.js
 */
const DEV = true;
importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.specificWorker.js');
onmessage = (e) => {
  if (DEV) console.time(e.data.ifcTypesGroupName);
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
  if (DEV) console.timeEnd(e.data.ifcTypesGroupName);
  postMessage({ loaded, ifcTypesGroupName: e.data.ifcTypesGroupName });
};
const loadItems = (ifcData) => {
  const loadedItems = {};
  ifcData.forEach((ifcItem) => {
    if (IFCjs.isTypeSupported(ifcItem))
      loadedItems[ifcItem[IFCjs.i.expressId]] = IFCjs.parseAndLoadItem(ifcItem);
  });
  return loadedItems;
};
