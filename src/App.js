import { print } from "./utils/console.js";
import { MESSAGE } from "./constants/message.js";
import BaseballGame from "./BaseballGame/index.js";

class App {
  async play() {
    print(MESSAGE.GAME_START);

    while (true) {
      const game = new BaseballGame();

      await game.gameStart();

      const isRestart = await game.gameOver();
      if (!isRestart) {
        return;
      }
    }
  }
}

export default App;
