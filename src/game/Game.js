import { MissionUtils } from "@woowacourse/mission-utils";
import IOManager from "./IOManager.js";
import { ANSWER_LENGTH } from "./constants.js";

class Game {
  constructor() {
    this.ioManager = new IOManager();
    this.answer = this.createRandomNumbers();
  }

  async play() {
    while (true) {
      const userInput = await this.ioManager.getThreeNumberInput();
      const { strike, ball } = this.compareNumbers(this.answer, userInput);
      this.ioManager.printGameStatus(strike, ball);

      if (strike === ANSWER_LENGTH) {
        this.ioManager.printGameEndMessage();
        break;
      }
    }
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

  compareNumbers(answer, userResponse) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (userResponse.charAt(i) - "0" === answer[i]) {
        strike++;
      } else if (answer.includes(userResponse.charAt(i) - "0")) {
        ball++;
      }
    }
    return { strike, ball };
  }
}

export default Game;
