import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseballGame.js";

export default class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    while (true) {
      await this.baseballGame.startGame();

      const shouldRestart = await this.getUserChoiceToRestart();
      if (!shouldRestart) return;
      this.baseballGame = new BaseballGame();
    }
  }

  async getUserChoiceToRestart() {
    const userInput = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );

    switch (userInput) {
      case "1":
        return true;
      case "2":
        return false;
      default:
        throw new Error("[ERROR] 올바른 입력이 아닙니다.");
    }
  }
}
