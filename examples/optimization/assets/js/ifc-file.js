class IfcFile {
  constructor(name, lastModified, size) {
    this.name = name.replace(/\s/, '_');
    this.lastModified = lastModified;
    this.size = size;
  }
}
export { IfcFile };
