import { MissionUtils } from '@woowacourse/mission-utils';
import { ANSWER_LENGTH } from './utils.js';

class Computer {
  constructor() {
    this.numbers = this.#generateRandomNumbers();
  }

  #generateRandomNumbers() {
    const randomNumbers = new Set();
    while (randomNumbers.size < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      randomNumbers.add(number);
    }
    return [...randomNumbers];
  }

  static getRandomNumbers() {
    const computer = new Computer();
    return computer.numbers;
  }
}

export default Computer;
