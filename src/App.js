import BaseballGameController from "./controller/BaseballGameController.js";

class App {
  #baseballGame = new BaseballGameController(3);

  constructor() {}

  async play() {
    await this.#baseballGame.startGame();
  }
}

export default App;

const app = new App();
app.play();
