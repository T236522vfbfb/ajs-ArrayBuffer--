export default class ArrayBufferConverter {
  static load(buffer) {
    this.buffer = buffer;
  }

  static toString() {
    const bufferView = new Uint16Array(this.buffer);
    let outputString = "";
    for (let i = 0; i < bufferView.length; i += 1) {
      outputString += String.fromCharCode(bufferView[i]);
    }
    return outputString;
  }
}
