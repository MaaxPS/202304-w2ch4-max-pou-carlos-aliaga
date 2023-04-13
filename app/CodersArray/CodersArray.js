class CodersArray {
  length = 0;

  constructor(...inputs) {
    for (const index of inputs) {
      this[this.length] = inputs[this.length];
      this.length++;
    }
  }

  push(input) {
    this[this.length] = input;
    this.length++;
  }

  some(input) {
    for (const key in this) {
      if (this[key] === input) {
        return true;
      }
    }

    return false;
  }
}

export default CodersArray;
