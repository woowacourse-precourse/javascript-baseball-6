import { MissionUtils } from "@woowacourse/mission-utils";
import { ANSWER_LENGTH } from "./constants.js";

class Computer {
  constructor() {
    this.answer = this.createRandomNumbers();
  }

  getAnswer() {
    return this.answer;
  }

  createRandomNumbers() {
    const threeRandomInteger = [];

    while (threeRandomInteger.length < ANSWER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!threeRandomInteger.includes(number)) {
        threeRandomInteger.push(number);
      }
    }
    return threeRandomInteger;
  }
}

export default Computer;
