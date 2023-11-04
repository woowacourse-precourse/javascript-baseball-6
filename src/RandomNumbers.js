import { ANSWER_LENGTH } from './utils.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class RandomNumbers {
  #randomNumbers;

  constructor() {
    this.#randomNumbers = this.#getRandomNumbers();
  }

  [Symbol.toPrimitive]() {
    return this.#randomNumbers;
  }

  #getRandomNumbers() {
    const randomNumbers = new Set();
    while (randomNumbers.size < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(number);
    }
    return [...randomNumbers];
  }
}

export default RandomNumbers;
