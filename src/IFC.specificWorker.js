/**
 * For Web Worker; requires Chevrotain
 */

export { parseAndLoadItem, isTypeSupported } from './ifc-parser/ifc-services/ifc-processor.js';
export {
  separateIfcEntities,
  getIfcType,
  getId,
  getIfcRawProperties
} from './ifc-parser/ifc-services/ifc-items-reader.js';
export { structuredData as s, itemsReaderValues as i } from './utils/global-constants.js';
