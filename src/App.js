import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./baseballGame.js";
import { MESSAGES } from "./message.js";

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  async play() {
    Console.print(MESSAGES.START);

    while (true) {
      await this.baseballGame.start();

      const shouldRestart = await this.getUserInputToRestart();
      if (!shouldRestart) return;
      this.baseballGame = new BaseballGame();
    }
  }

  async getUserInputToRestart() {
    try {
      const userInput = await Console.readLineAsync(MESSAGES.RESTART_OR_DONE);

      switch (userInput) {
        case "1":
          return true;
        case "2":
          return false;
        default:
          throw new Error(MESSAGES.RESTART_NUMBER_ERROR);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const app = new App();
app.play();

export default App;
