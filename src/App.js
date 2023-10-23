import BullsAndCowsGame from "./controller/BullsAndCowsGame.js";

class App {

  #gameController;

  constructor() {
    this.#gameController = new BullsAndCowsGame();
  }

  async play() {
    await this.#gameController.startGame();
  }
}

const app = new App();
app.play();

export default App;