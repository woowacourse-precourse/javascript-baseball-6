import GameView from "./gameView.js";
import GameModel from "./gameModel.js";
import GameController from "./gameController.js";
class App {
  constructor() {
    this.view = new GameView();
    this.model = new GameModel();
    this.controller = new GameController(this.model);
  }

  async play() {
    this.view.printGameStartMessage();
    try {
      await this.gameStart();
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  async gameStart() {
    this.controller.updateRandomComputerNumber();
  }
}

const app = new App();
app.play();

export default App;
