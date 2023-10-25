import { Random } from "@woowacourse/mission-utils";
import GuessNumber from "./GuessNumber.js";
import { GAME_INFO } from "./constants/baseballGameInfo.js";

class BaseballGame {
  constructor() {
    this.correctAnswerArray = [];

    console.log("숫자 야구 게임을 시작합니다.");
    this.startTurn();
    this.getCorrectAnswerArray();
  }

  getCorrectAnswerArray() {
    while (this.correctAnswerArray.length < GAME_INFO.GUESS_NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(
        GAME_INFO.MIN_NUMBER,
        GAME_INFO.MAX_NUMBER
      );
      if (!this.correctAnswerArray.includes(number)) {
        this.correctAnswerArray.push(number);
      }
    }
  }

  startTurn() {
    new GuessNumber();
  }
}

export default BaseballGame;
