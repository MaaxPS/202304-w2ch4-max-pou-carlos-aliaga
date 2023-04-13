
class CodersArray {
  length=0;

  constructor(...inputs) {
    for(let index of inputs){
      this[this.length]=inputs[this.length]
      this.length++
    }
  }

  push(){
    return 
  }
}


export default CodersArray;
