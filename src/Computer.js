import { MissionUtils } from '@woowacourse/mission-utils';

const DIGIT_COUNT = 3;

class Computer {
  #number;

  constructor() {
    this.resetNumber();
  }
  getNumber() {
    return this.#number;
  }

  resetNumber() {
    const computer = [];
    while (computer.length < DIGIT_COUNT) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#number = computer.join('');
  }
}
export default Computer;
