// import { GAME_MESSAGE } from "./constants";
import { gameStartMessage } from "./modules/game.js";
class App {
  async play() {
    gameStartMessage();
  }
}

const app = new App();
app.play();

export default App;
