import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Game from "./Game.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    while (true) {
      const game = new Game();
      try {
        await game.round();
      } catch (error) {
        // Console.print(Messages.ERROR_INPUT);
        return Promise.reject(error);
      }
      try {
        await game.menu();
      } catch (error) {
        // Console.print(Messages.ERROR_MENU);
        return Promise.reject(error);
      }
    }
  }
}

// App.prototype.play();

export default App;
