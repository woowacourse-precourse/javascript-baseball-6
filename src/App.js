// import { GAME_MESSAGE } from "./constants";
import { baseballGame, gameStartMessage } from "./modules/game.js";
class App {
  async play() {
    gameStartMessage();
    baseballGame();
  }
}

const app = new App();
app.play();

export default App;
