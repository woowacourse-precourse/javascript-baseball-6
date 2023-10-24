import { Computer } from "./Computer";
import { createRandomNum } from "./createRandomNum";

export class BaseballGame {
  computer;

  constructor() {
    this.setHint();
  }

  setHint() {
    const answerNum = createRandomNum();

    this.computer = new Computer(answerNum);
  }

  compareNum(userNumber) {
    return this.computer.compareNum(userNumber);
  }
}
