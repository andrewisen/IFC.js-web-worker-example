import { IndexedDB } from '../indexed-db/indexed-db.js';
import { buildScene } from '../build-scene/build-scene.js';
/**
 * This snippet is originally for the Web Workers example.
 * However, Web Workers are disabled in this example.
 *
 * As a result, the IndexedDB will be initialized twice!
 */
const saveStructuredAsync = (copy, myIfcFile) => {
  const data = { structured: copy, metaData: myIfcFile };
  const indexedDB = new IndexedDB();
  const cb = () => {
    indexedDB.set(data, myIfcFile.name);
  };
  indexedDB.init(cb);
};

/**
 * This snippet is modified to work with a dummy Web Worker.
 * In this example, we will force a synchronous behavior.
 */
const saveStructuredSync = (structured, myIfcFile) => {
  const data = { structured, metaData: myIfcFile };
  const indexedDB = new IndexedDB();
  const cb = () => {
    indexedDB.set(data, myIfcFile.name);
    const dummyPostMessage = {};
    dummyPostMessage.data = structured;
    buildScene(dummyPostMessage);
  };
  indexedDB.init(cb);
};

export { saveStructuredAsync, saveStructuredSync };
