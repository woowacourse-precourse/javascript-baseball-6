import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  init() {
    this.#numbers = [];
  }

  createNumber() {
    this.init();
    while (this.#numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#numbers.includes(number)) {
        this.#numbers.push(number);
      }
    }
  }

  generateComputerBaseballNum() {
    return this.#numbers.join('');
  }
}

export default Computer;
