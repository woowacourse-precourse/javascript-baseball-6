import { MissionUtils } from '@woowacourse/mission-utils';
import { ANSWER_LENGTH } from './utils';

class Computer {
  constructor() {
    this.numbers = this.getRandomNumbers();
  }

  getRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }

  static getComputer() {
    const computer = new Computer();
    return computer.numbers;
  }
}

export default Computer;
