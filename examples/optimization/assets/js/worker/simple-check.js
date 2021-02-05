/**
 * Check if the IndexedDB returns an IFC file.
 * Further checks could be added here, for example "last modified".
 */
const simpleCheck = (ifcFile) => (ifcFile === undefined ? true : false);

export { simpleCheck };
