import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.MIN_NUMBER = 1;
    this.MAX_NUMBER = 9;
    this.MAX_LENGTH = 3;
  }

  setNumber() {
    const ANSWER = [];

    while (ANSWER.length < this.MAX_LENGTH) {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(
        this.MIN_NUMBER,
        this.MAX_NUMBER
      );
      !ANSWER.includes(RANDOM_NUMBER) && ANSWER.push(RANDOM_NUMBER);
    }
    MissionUtils.Console.print(ANSWER);
  }
}

export default Computer;
