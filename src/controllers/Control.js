import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "../constants/Message";

export default class Control {
  constructor(app) {
    this.app = app;
  }

  async startGame() {
    Console.print(GAME_MESSAGE.startGame);
    while (this.app.isReplaying) {
      const gameWon = await this.app.compare.compareNumbers();
      if (gameWon) {
        await this.askReplay();
      }
    }
  }

  async askReplay() {
    Console.print(GAME_MESSAGE.gameWon);
    Console.print(GAME_MESSAGE.askReplay);
    const userChoice = await Console.readLineAsync("");

    if (userChoice === "1") {
      this.app.isReplaying = true;
      return;
    }
    
    if (userChoice === "2") {
      this.app.isReplaying = false;
      return;
    }

    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}