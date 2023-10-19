import { Random } from '@woowacourse/mission-utils';
import { CONSTANT } from './Constant.js';

class BaseballGame {
  #answer;
  constructor() {
    this.#answer = this.#setRandomNumbers();
  }

  #setRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < CONSTANT.MAX_NUM_LEN) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(newNumber)) {
        randomNumbers.push(newNumber);
      }
    }
    return randomNumbers;
  }
}

export default BaseballGame;
