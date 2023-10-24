import { MissionUtils } from '@woowacourse/mission-utils';
import { BASEBALL } from './Constant.js';

class Computer {
  constructor() {
    this.number = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const number = [];

    while (number.length < BASEBALL.MAX_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(BASEBALL.MIN_NUMBER, BASEBALL.MAX_NUMBER);
      if (number.includes(randomNumber)) {
        continue;
      }
      number.push(randomNumber);
    }
    return number;
  }
}

export default Computer;