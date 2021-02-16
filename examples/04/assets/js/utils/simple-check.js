/**
 * We could add some better checks at this point.
 *
 * For example:
 * We could check the lastModified value and determine if the files has been modified.
 */
function simpleCheck(ifcFile) {
  return ifcFile === undefined ? true : false;
}

export { simpleCheck };
