import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.number = this.getRandomNum();
  }

  getRandomNum() {
    const number = [];
    while (number.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!number.includes(randomNum)) {
        number.push(randomNum);
      }
    }
    return number;
  }
}

export default Computer;
