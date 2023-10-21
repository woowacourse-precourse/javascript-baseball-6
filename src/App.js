import { Console } from "@woowacourse/mission-utils";
import Messages from "./Messages.js";
import Game from "./Game.js";

class App {
  async play() {
    Console.print(Messages.MSG_START);
    while (true) {
      const game = new Game();
      await game.round();
      
      // todo: refactor tmp -> menu
      const tmp = await Console.readLineAsync(Messages.INPUT_MENU + '\n');
      if (tmp !== '1' && tmp !== '2') {
        Console.print(Messages.ERROR_MENU);
      } else if (tmp === '1') {
        continue;
      } else if (tmp === '2') {
        break;
      }
    }
  }
}

App.prototype.play();

export default App;
