import { Random } from '@woowacourse/mission-utils';
import { RESULTOBJECT } from '../constants/constants.js'

export default class opponent{

  #computerNumber;
  
  constructor() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    this.#computerNumber = [];
    while (this.#computerNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#computerNumber.includes(number)) {
        this.#computerNumber.push(number);
      }
    }
    console.log(this.#computerNumber);
  }

  judgeResult(userNumber) {
    const result = {...RESULTOBJECT};

    userNumber.map((num, i) => {
      if(num === this.#computerNumber[i])
        result.strike += 1;
    });

    userNumber.map((num, i) => {
      if ((num !== this.#computerNumber[i]) &&
      this.#computerNumber.includes(num)) {
        result.ball += 1;
      }
    })

    return result;
  }
}