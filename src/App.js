import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./components/baseballGame.js";
import Messages from "./util/Messages.js";

class App {
  async play() {
    const IS_KEEP_GAME = 1;
    Console.print(Messages.START);
    while (IS_KEEP_GAME === 1) {
      const game = new BaseballGame();
      game.start();
      // Console.readLineAsync(Messages.RESTART_OR_EXIT);
      break;
    }
  }
}
export default App;
