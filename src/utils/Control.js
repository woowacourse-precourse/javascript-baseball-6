import { Console } from "@woowacourse/mission-utils";

export default class Control {
  constructor(app) {
    this.app = app;
  }

  async startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.app.isReplaying) {
      const gameWon = await this.app.compare.compareNumbers();
      if (gameWon) {
        await this.askReplay();
      }
    }
  }

  async askReplay() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const userChoice = await Console.readLineAsync("");

    if (userChoice === "1") {
      this.app.isReplaying = true;
    } else if (userChoice === "2") {
      this.app.isReplaying = false;
    } else {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }
}
