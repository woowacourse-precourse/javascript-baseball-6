import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.answerNumbers = [];
  }

  generateRandomNumbers(length) {
    this.answerNumbers = [];
    while (this.answerNumbers.length < length) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answerNumbers.includes(number)) {
        this.answerNumbers.push(number);
      }
    }
  }
}

export default Computer;