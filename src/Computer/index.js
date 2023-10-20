import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.nums = [];
  }

  generateRandomNumber() {
    const { nums } = this;
    while (nums.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nums.includes(number)) {
        nums.push(number);
      }
    }
    return this.nums;
  }
}

export default Computer;
