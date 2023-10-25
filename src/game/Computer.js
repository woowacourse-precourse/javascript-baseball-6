import { MissionUtils } from "@woowacourse/mission-utils";
import { ANSWER_LENGTH } from "./constants.js";

class Computer {
  constructor() {
    this.answer = this.createRandomNumbers();
  }

  calculateStrikesAndBalls(userResponse) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      const userNumber = userResponse.charAt(i) - "0";
      if (userNumber === this.answer[i]) {
        strike++;
      }
      if (this.answer.includes(userNumber) && userNumber !== this.answer[i]) {
        ball++;
      }
    }
    return { strike, ball };
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
