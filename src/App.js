import { gameMessages } from "./constants/gameMessages.js";
import { print } from "./viewControllers/print.js";
import Game from "./domains/Game.js";
import { readLine } from "./viewControllers/readLine.js";
import Gong from "./domains/Gong.js";
import { selectEndOrRestart } from "./utils/endOrRestart.js";
import { SELECTED } from "./utils/endOrRestart.js";

class App {
  async play() {
    print(gameMessages.START_GAME);
    await this.startGame();
  }

  async startGame() {
    const game = new Game();

    while (true) {
      const userInput = await readLine(gameMessages.INPUT_GONGS);
      const gongs = Gong.fromString(userInput);
      const { success, message } = game.compareBalls(gongs);

      print(message);

      if (success) {
        print(gameMessages.WINNING_GAME);
        break;
      }
    }

    await this.restartOrEnd();
  }

  async restartOrEnd() {
    const endOrRestartInput = await readLine(
      gameMessages.SELECT_END_OR_RESTART
    );
    const selectedNum = selectEndOrRestart(endOrRestartInput);

    if (selectedNum === SELECTED.RESTART_GAME) {
      await this.startGame();
    }
  }
}

export default App;

const app = new App();

app.play();
