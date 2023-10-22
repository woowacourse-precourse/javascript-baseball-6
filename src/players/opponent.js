import { Random } from '@woowacourse/mission-utils';
import { RESULTOBJECT } from '../constants/constants.js'

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
    const result = {...RESULTOBJECT};

    userNumber.map((num, i) => {
      if(num === this.#_computerNumber[i])
        result.strike += 1;
    });

    userNumber.map((num, i) => {
      if ((num !== this.#_computerNumber[i]) &&
      this.#_computerNumber.includes(num)) {
        result.ball += 1;
      }
    })

    if (result.strike === 0 && result.ball === 0) {
      result.nothing = true;
    }

    console.log(result);

    return result;
  }
}