import BaseballGameController from "./controller/BaseballGameController.js";
import { StaticNumber } from "./constant/Constant.js";

class App {
  #baseballGame = new BaseballGameController(
    StaticNumber.BASEBALL_NUMBER_LENGTH
  );

  constructor() {}

  async play() {
    await this.#baseballGame.startGame();
  }
}

export default App;

const app = new App();
app.play();
