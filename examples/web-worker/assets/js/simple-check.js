/**
 * We could add some better checks.
 * For example: Check the lastModified value.
 */
function simpleCheck(ifcFile) {
  return ifcFile === undefined ? true : false;
}

export { simpleCheck };
