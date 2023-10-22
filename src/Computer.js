import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';
import { NUMBER_LENGTH } from './Constants.js';

class Computer {
  constructor() {
    this.answerNumbers = [];
    this.isOut = false;
  }

  generateRandomNumbers(length) {
    this.answerNumbers = [];
    while (this.answerNumbers.length < length) {
      const number = Random.pickNumberInRange(1, 9).toString();
      if (!this.answerNumbers.includes(number)) {
        this.answerNumbers.push(number);
      }
    }
  }

  checkAnswer(answer) {
  }
}

export default Computer;
