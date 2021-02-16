/**
 * The IfcFile class is a helper class.
 *
 * Each object will store information regarding the IfcFile.
 * We can use this information to determine what to do with the file.
 *
 * For example, we might do one thing for small files and another thing for large files-.
 */
class IfcFile {
  constructor(name, lastModified, size) {
    this.name = name.replace(/\s/, '_');
    this.lastModified = lastModified;
    this.size = size;
  }
}

export { IfcFile };
