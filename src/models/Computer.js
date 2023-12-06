import { MissionUtils } from '@woowacourse/mission-utils';
import { RULE } from '../constants/index.js';

class Computer {
  /**
   * @type {number[]}
   */
  #numbers;

  constructor() {
    this.#setNumbers();
  }

  #getRandomNumbers() {
    let array = [];
    while (array.length < RULE.lengthOfNumbers) {
      const { start, end } = RULE.rangeOfNumber;
      const number = MissionUtils.Random.pickNumberInRange(start, end);
      if (!array.includes(number) && number) {
        array.push(number);
      }
    }

    return array;
  }
  #setNumbers() {
    const numbers = this.#getRandomNumbers();
    this.#numbers = numbers;
  }
  reStart() {
    this.#setNumbers();
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Computer;
