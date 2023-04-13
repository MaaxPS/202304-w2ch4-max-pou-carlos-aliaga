import isLength from "../length/length.js";

class CodersArray {
  inputs;
  length;

  constructor(...inputs) {
    this.inputs = inputs;
    this.length=isLength(...inputs)
  }
}


export default CodersArray;
