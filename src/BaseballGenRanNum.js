import { Random } from "@woowacourse/mission-utils";

class BaseballGenRanNum {
  state = {};
  constructor() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}
