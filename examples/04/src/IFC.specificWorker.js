/**
 * For Web Worker; requires Chevrotain
 */

export {
  parseAndLoadItem,
  isTypeSupported
} from '../../../src/ifc-parser/ifc-services/ifc-processor.js';
export {
  separateIfcEntities,
  getIfcType,
  getId,
  getIfcRawProperties
} from '../../../src/ifc-parser/ifc-services/ifc-items-reader.js';

export {
  structuredData as s,
  itemsReaderValues as i
} from '../../../src/utils/global-constants.js';
