import { MissionUtils } from '@woowacourse/mission-utils';

class Random {
  static createNumber() {
    const computer = [];
    while (computer.length < 3) {
      const getPerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(getPerNumber)) {
        computer.push(getPerNumber);
      }
    }

    return computer;
  }
}

console.log(Random.createNumber());

export default Random;
