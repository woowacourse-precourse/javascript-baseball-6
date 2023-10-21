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
    while (true) {
      const userInput = await readLine(gameMessages.INPUT_GONGS);
      const gongs = Gong.fromString(userInput);

      print("gongs : ", gongs);
      break;
    }
  }
}

export default App;

const app = new App();

app.play();
