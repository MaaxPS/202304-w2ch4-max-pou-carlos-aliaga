class CodersArray {
  length = 0;

  constructor(...inputs) {
    for (let index of inputs) {
      this[this.length] = inputs[this.length];
      this.length++;
    }
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
const aver = new CodersArray(2, 3, 4, 5);
console.log(aver);
console.log(aver.push(4));
