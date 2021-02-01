function IndexedDB() {
  const name = 'ifc-js';
  const version = 1;
  const transactionName = 'scene';
  var database;
  return {
    init: function (cb) {
      var request = indexedDB.open(name, version);
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        if (db.objectStoreNames.contains(transactionName) === false) {
          db.createObjectStore(transactionName);
        }
      };
      request.onsuccess = function (event) {
        database = event.target.result;
        cb();
      };
      request.onerror = function (event) {
        console.error('IndexedDB', event);
      };
    },
    get: function (key, cb) {
      var transaction = database.transaction(transactionName, 'readwrite');
      var objectStore = transaction.objectStore(transactionName);
      var request = objectStore.get(key);
      request.onsuccess = function (event) {
        cb(event.target.result);
      };
    }
  };
}

export { IndexedDB };
