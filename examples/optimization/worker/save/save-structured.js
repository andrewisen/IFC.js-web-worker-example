const saveStructured = (structured, myIfcFile) => {
  structured = { structured, MetaData: myIfcFile };
  let indexedDB = new IndexedDB();
  const cb = () => {
    indexedDB.set(structured, myIfcFile.name);
  };
  indexedDB.init(cb);
};
