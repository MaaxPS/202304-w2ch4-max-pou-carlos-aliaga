class CodersArray {
  length = 0;

  constructor(...inputs) {
    for (let index of inputs) {
      this[this.length] = inputs[this.length];
      this.length++;
    }
  }

  push(input) {
    this[this.lenght] = input;
    this.length++;
  }
}

export default CodersArray;
const aver = new CodersArray(2, 3, 4, 5);
console.log(aver);
console.log(aver.push(4));
