import { MissionUtils } from "@woowacourse/mission-utils";
import { COMPUTER_RULES } from "../Constants.js";

class Computer {
  generateAnswer() {
    const computer = [];

    while (computer.length < COMPUTER_RULES.DIGITS) {
      const number = MissionUtils.Random.pickNumberInRange(
        COMPUTER_RULES.MIN,
        COMPUTER_RULES.MAX
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

export default Computer;
