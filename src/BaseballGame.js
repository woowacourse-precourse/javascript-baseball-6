import { Random } from "@woowacourse/mission-utils";
import GuessNumber from "./GuessNumber.js";
import { GAME_INFO } from "./constants/baseballGameInfo.js";

class BaseballGame {
  constructor() {
    this.correctAnswerArray = [];
    this.guessNumberInstance = null;
    this.isWin = false;

    console.log("숫자 야구 게임을 시작합니다.");
    this.startTurn();
    this.getCorrectAnswerArray();
    this.resultTurn();
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
    this.guessNumberInstance = new GuessNumber(this.correctAnswerArray);
  }

  async resultTurn() {
    while (!this.isWin) {
      this.isWin = await this.guessNumberInstance.getResult();
    }

    console.log(
      `${GAME_INFO.GUESS_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
  }
}

export default BaseballGame;
