import { Random, Console } from "@woowacourse/mission-utils";
import GuessNumber from "./GuessNumber.js";
import { GAME_INFO } from "./constants/baseballGameInfo.js";

class BaseballGame {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.init();
  }

  init() {
    this.correctAnswerArray = [];
    this.guessNumberInstance = null;
    this.isWin = false;

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
      if (!(await this.guessNumberInstance.inputGuessNumber())) return;
      this.isWin = await this.guessNumberInstance.getResult();
    }

    Console.print(
      `${GAME_INFO.GUESS_NUMBER_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
    this.overGame();
  }

  async overGame() {
    let overTrigger = Number(
      await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      )
    );

    if (overTrigger === 1) {
      this.init();
    }
  }
}

export default BaseballGame;
