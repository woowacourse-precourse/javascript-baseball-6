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
    const defaultValue = { strike: 0, ball: 0 };

    return answer.reduce((acc, current, index) => {
      if (current === userNumber[index]) {
        acc.strike += 1;
        return acc;
      }

      if (userNumber.includes(current)) acc.ball += 1;

      return acc;
    }, defaultValue);
  }
}
