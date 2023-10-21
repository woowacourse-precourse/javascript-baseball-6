import { gameMessages } from "./constants/gameMessages.js";
import { print } from "./viewControllers/print.js";
import Game from "./domains/Game.js";
import { readLine } from "./viewControllers/readLine.js";
import Gong from "./domains/Gong.js";

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
  }
}

export default App;

const app = new App();

app.play();
