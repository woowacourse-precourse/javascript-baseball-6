import { Random } from '@woowacourse/mission-utils';
import { RESULTOBJECT } from '../constants/constants.js';

export default class Computer {
  constructor() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      computerNumber.add(number);
    }

    this._computerNumber = Array.from(computerNumber);
  }

  judgeResult(userNumber) {
    const result = { ...RESULTOBJECT };

    userNumber.map((num, i) => {
      if (num === this._computerNumber[i]) result.strike += 1;
    });

    userNumber.map((num, i) => {
      if (
        num !== this._computerNumber[i]
        && this._computerNumber.includes(num)
      ) {
        result.ball += 1;
      }
    });

    return result;
  }
}
