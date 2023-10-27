import { CONSTANT } from "../common";
import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {}

  createNumber() {
    const computer = [];
    while (computer.length < CONSTANT.NUMBER_LENGTH) {
      const number = String(Random.pickNumberInRange(1, 9));
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

export default Computer;
