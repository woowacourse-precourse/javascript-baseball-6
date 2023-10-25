import { MissionUtils } from '@woowacourse/mission-utils';
import { DIGIT_COUNT } from './utils';

class Computer {
  #number;

  constructor() {
    this.resetNumber();
  }
  getNumber() {
    return this.#number;
  }

  resetNumber() {
    const computer = new Set();
    while (computer.size < DIGIT_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      computer.add(number);
    }
    this.#number = Array.from(computer).join('');
  }
}
export default Computer;
