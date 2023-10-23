import { Random } from '@woowacourse/mission-utils';
import { RESULTOBJECT } from '../constants/constants.js'

export default class computer{

  #computerNumber;
  
  constructor() {
    this.makeRandomNumber();
  }

  makeRandomNumber() {
    const computerNumber = new Set();
  
    while (computerNumber.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      computerNumber.add(number);
    }
  
    this.#computerNumber = Array.from(computerNumber);
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