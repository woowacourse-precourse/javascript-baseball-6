import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./BaseballGame.js";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }
  async play() {
    while (true) {
      await this.baseballGame.startGame();

      // 게임이 끝나면 사용자 입력을 받아 게임을 재시작할지 종료할지 확인
      const userInput = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
      );
      switch (userInput) {
        case "1":
          this.baseballGame = new BaseballGame();
          break; // 새로운 게임 시작
        case "2":
          return; // 종료
        default:
          throw new Error("올바른 입력이 아닙니다.");
      }
    }
  }
}

const app = new App();
app.play();
