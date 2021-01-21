/**
 * This Web Worker uses a rewrite of loadIfcFileItems (/src/ifc-parser/ifc-services/ifc-processor.js)
 * NOTE: We will not call referenceEntities() since the references will likely not exists
 */
importScripts('../../libs/chevrotain.min.js');
importScripts('../../../build/IFC.specificWorker.js');
onmessage = (e) => {
  //// DEBUG ////
  // console.debug(`Starting ${e.data.ifcTypesGroupName}...`);
  console.time(e.data.ifcTypesGroupName);
  //// DEBUG ////

  /**
   * Get each ifcType from the GROUP
   */
  const ifcTypes = Object.values(e.data.ifcTypesGroup).map((ifcType) => {
    return ifcType;
  });

  /**
   * This is a rewrite constructRawIfcItems (src/ifc-parser/ifc-services/ifc-items-reader.js)
   */
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
    /**
     * Use array.push()
     *
     * See:
     * https://dev.to/uilicious/javascript-array-push-is-945x-faster-than-array-concat-1oki
     */
    ifcItems.push(ifcObject);
  });

  const loaded = loadItems(ifcItems);

  //// DEBUG ////
  console.timeEnd(e.data.ifcTypesGroupName);
  //// DEBUG ////
  postMessage({ loaded, ifcTypesGroupName: e.data.ifcTypesGroupName });
};

/**
 * We will not call referenceEntities() since the references will likely not exists
 */
function loadItems(ifcData) {
  const loadedItems = {};
  ifcData.map((ifcItem) => {
    if (IFCjs.isTypeSupported(ifcItem)) {
      loadedItems[ifcItem[IFCjs.i.expressId]] = IFCjs.parseAndLoadItem(ifcItem);
    }
  });
  return loadedItems;
}
