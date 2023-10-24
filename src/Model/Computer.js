import { Player } from './Player.js';

export class Computer extends Player {
  compareNumber(userNumber) {
    this.validation(userNumber);

    return this.#checkResult(this._number, userNumber);
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
