import AnswerGenerator from "../gameUtils/AnswerGenerator.js";

class Computer {
  constructor() {
    this.answer;
  }

  getAnswer() {
    return this.answer;
  }

  setAnswer() {
    this.answer = AnswerGenerator.getAnswer();
  }
}

export default Computer;
