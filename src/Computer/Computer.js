import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  generateAnswer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(computer);
    return computer;
  }
}

export default Computer;
