import { MissionUtils } from "@woowacourse/mission-utils";
import { CONDITION, OUTPUT_MESSAGE } from "./constants.js";

class Game {
  constructor() {
    this.answer = [];
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  setAnswer() {
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  setBaseBallCount(userInput) {
    this.resetBaseBallCount();

    if (!userInput) {
      throw new Error("[ERROR] 입력이 비어있습니다.");
    }

    if (userInput.length > CONDITION.FULL_ANSWER_COUNT) {
      throw new Error("[ERROR] 세자리 입력을 초과했습니다.");
    }

    const userInputArray = userInput.split("");

    if (userInputArray.some((number) => isNaN(Number(number)))) {
      throw new Error("[ERROR] 숫자 외의 문자를 입력했습니다.");
    }

    userInputArray.forEach((number, index) => {
      if (this.answer[index] === Number(number)) {
        this.strikeCount += 1;
      } else if (this.answer.includes(Number(number))) {
        this.ballCount += 1;
      }
    });
  }

  resetBaseBallCount() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  getStrikeCount() {
    return this.strikeCount;
  }

  getBallCount() {
    return this.ballCount;
  }
}

export default Game;
