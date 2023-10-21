import { Random } from '@woowacourse/mission-utils';
import { resultObject } from '../constants/constants.js'

export default class opponent{

  #_computerNumber;
  
  constructor() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    this.#_computerNumber = [];
    while (this.#_computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#_computerNumber.includes(number)) {
        this.#_computerNumber.push(number);
      }
    }
    console.log(this.#_computerNumber);
  }

  judgeResult(userNumber) {
    const result = {...resultObject};

    userNumber.map((num, i) => {
      if(num === this.#_computerNumber[i])
        result.STRIKE += 1;
    });

    userNumber.map((num, i) => {
      if ((num !== this.#_computerNumber[i]) &&
      this.#_computerNumber.includes(num)) {
        result.BALL += 1;
      }
    })

    if (result.STRIKE === 0 && result.STRIKE === 0) {
      result.NOTHING = true;
    }

    return result;
  }
}