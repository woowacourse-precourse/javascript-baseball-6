import { SCORE } from '../constants/baseballGame.js';
import { NUMBER } from '../constants/baseballNumber.js';
import { BaseballNumber } from './BaseballNumber.js';

export class Computer {
  #answerList;

  constructor(number) {
    this.#answerList = new BaseballNumber(number)._numberList;
  }

  compareNumber(userNumber) {
    const userNumberList = new BaseballNumber(userNumber)._numberList;

    return this.#checkResult(this.#answerList, userNumberList);
  }

  #checkResult(answer, userNumber) {
    const defaultScore = { strike: NUMBER.ZERO, ball: NUMBER.ZERO };

    return answer.reduce((score, current, index) => {
      if (current === userNumber[index]) {
        score.strike += SCORE.UNIT;
        return score;
      }

      if (userNumber.includes(current)) score.ball += SCORE.UNIT;

      return score;
    }, defaultScore);
  }
}
