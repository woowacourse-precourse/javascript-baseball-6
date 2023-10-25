import MESSEAGE from "./Constants.js";

class Baseball {
  constructor(input, random) {
    this.input = input.split('').map(Number);
    this.random = random;
  }

  ballNumber() {
    const ballArray = this.input.filter((element, index) => element !== this.random[index] && this.random.includes(element));      
    return ballArray.length;
  }

  ballResult() {
    return this.ballNumber() > 0 ? `${this.ballNumber()}${MESSEAGE.BALL}` : ''; 
  }

  strikeNumber() {
    const strikeArray = this.input.filter((element, index) => element === this.random[index]);       
    return strikeArray.length;
  }

  strikeResult() {
    return this.strikeNumber() > 0 ? `${this.strikeNumber()}${MESSEAGE.STRIKE}` : '';
  }

  outcome() {
    if(this.ballNumber() === 0 && this.strikeNumber() === 0) {
        return `${MESSEAGE.NOTHING}`;
    }  
    return [this.ballResult(), this.strikeResult()].join(' ').trim();
  }
}

export default Baseball

