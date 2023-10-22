import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.number = this.generateRandomNumber();
  }

  generateRandomNumber() {
    const number = [];

    while (number.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (number.includes(randomNumber)) {
        continue;
      }
      number.push(randomNumber);
    }
    return number;
  }
}

export default Computer;