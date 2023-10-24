import { Console } from "@woowacourse/mission-utils";
import { GAMEMESSAGE } from "../constants/Message";

export default class Control {
  constructor(app) {
    this.app = app;
  }

  async startGame() {
    Console.print(GAMEMESSAGE.startGame);
    while (this.app.isReplaying) {
      const gameWon = await this.app.compare.compareNumbers();
      if (gameWon) {
        await this.askReplay();
      }
    }
  }

  async askReplay() {
    Console.print(GAMEMESSAGE.gameWon);
    Console.print(GAMEMESSAGE.askReplay);
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