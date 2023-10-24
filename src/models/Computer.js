import { MissionUtils } from "@woowacourse/mission-utils";
import { CONSTANT } from "../constants/constant";

class Computer {
  generateNumber() {
    const computer = [];

    while (computer.length < CONSTANT.selectNumber) {
      const number = MissionUtils.Random.pickNumberInRange(CONSTANT.startScope, CONSTANT.endScope);

      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer.join('');
  }
}

export default Computer;