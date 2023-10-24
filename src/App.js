import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Game from "./Game.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    try {
      await this.startGame();
    } catch (error) {
      throw error;
    }
  }

  async startGame() {
    try {
      const game = new Game();
      await game.round();
      const choosen = await game.menu();
      if (choosen === 1) {
        await this.startGame();
      } else if (choosen === 2) {
        return;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;
