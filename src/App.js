import { gameMessages } from "./constants/gameMessages.js";
import { print } from "./viewControllers/print.js";

class App {
  async play() {
    print(gameMessages.START_GAME);
    await this.startGame();
  }

  async startGame() {}
}

export default App;

const app = new App();

app.play();
