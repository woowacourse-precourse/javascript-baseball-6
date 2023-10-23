import BullsAndCowsGameController from "./controller/BullsAndCowsGameController.js";
import ComputerNumberGenerator from "./models/ComputerNumberGenerator.js";

class App {

  #gameController;

  constructor() {
    this.#gameController = new BullsAndCowsGameController(new ComputerNumberGenerator());
  }

  async play() {
    await this.#gameController.startGame();
  }
}

const app = new App();
app.play();

export default App;