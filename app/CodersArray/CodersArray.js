class CodersArray {
  length = 0;
  constructor(...inputs) {
    for (const index of inputs) {
      this[this.length] = index;
      this.length++;
    }
  }

  push(input) {
    this[this.lenght] = input;
    this.length++;
    return this.length;
  }
}
export default CodersArray;
