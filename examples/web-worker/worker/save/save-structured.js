const saveStructured = (structured, myIfcFile) => {
  structured = { structured, MetaData: myIfcFile };
  let indexedDB = new IndexedDB();

  /**
   * The IndexedDB API is mostly asynchronous.
   * The API doesn't give you data by returning values; instead, you have to pass a callback function.
   * You don't "store" a value into the database, or "retrieve" a value out of the database through synchronous means.
   * Instead, you "request" that a database operation happens.
   * You get notified by a DOM event when the operation finishes, and the type of event you get lets you know if the operation succeeded or failed.
   *
   * This sounds a little complicated at first, but there are sanity measures baked in.
   * It's not that different from the way that XMLHttpRequest works.
   *
   */
  const cb = () => {
    indexedDB.set(structured, myIfcFile.name);
  };
  indexedDB.init(cb);
};
