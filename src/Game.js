import { MissionUtils } from "@woowacourse/mission-utils";
import { CONDITION, OUTPUT_MESSAGE } from "./constants.js";

class Game {
  constructor() {
    this.answer = [];
    this.strikeCount = 0;
    this.ballCount = 0;
    this.output = OUTPUT_MESSAGE.START;
  }

  setAnswer() {
    this.answer = [
      ...MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        9,
        CONDITION.FULL_ANSWER_COUNT
      ),
    ];
  }

  setOutput(type) {
    switch (type) {
      case "start":
        this.output = OUTPUT_MESSAGE.START;
        break;
      case "restart":
        this.output = OUTPUT_MESSAGE.RESTART;
        break;
      case "input":
        this.output = OUTPUT_MESSAGE.INPUT;
        break;
      case "count":
        this.output = OUTPUT_MESSAGE.COUNT(this.strikeCount, this.ballCount);
        break;
      case "end":
        this.output = OUTPUT_MESSAGE.END;
        break;
      case "exit":
        this.output = OUTPUT_MESSAGE.EXIT;
        break;
    }
  }

  setBaseBallCount(userInput) {
    const userInputArray = userInput.split("");

    userInputArray.forEach((number, index) => {
      if (this.answer[index] === Number(number)) {
        this.strikeCount += 1;
      } else if (this.answer.includes(Number(number))) {
        this.ballCount += 1;
      }
    });
  }

  getAnswer() {
    return this.answer;
  }

  getStrikeCount() {
    return this.strikeCount;
  }

  getBallCount() {
    return this.ballCount;
  }

  getOutput() {
    return this.output;
  }
}

export default Game;
