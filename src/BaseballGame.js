import { Random, Console } from "@woowacourse/mission-utils";
import GuessNumber from "./GuessNumber.js";
import { GAME_INFO } from "./constants/baseballGameInfo.js";

class BaseballGame {
  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  async init() {
    this.correctAnswerArray = [];
    this.guessNumberInstance = null;
    this.isWin = false;

    this.startTurn();
    this.getCorrectAnswerArray();
    await this.resultTurn();
  }

  startTurn() {
    this.guessNumberInstance = new GuessNumber(this.correctAnswerArray);
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

  async resultTurn() {
    while (!this.isWin) {
      if (!(await this.guessNumberInstance.inputGuessNumber())) return;
      this.isWin = await this.guessNumberInstance.getResult();
    }

    this.overGame();
  }

  async overGame() {
    let overTrigger = Number(
      await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      )
    );
    console.log(overTrigger);
    if (overTrigger === 1) {
      this.init();
    }
  }
}

export default BaseballGame;
