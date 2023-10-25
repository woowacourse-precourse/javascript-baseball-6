import BaseballGameController from "./controller/BaseballGameController.js";
import { StaticNumber } from "./domain/Constant.js";
class App {
  #baseballGame = new BaseballGameController(StaticNumber.ANSWER_NUMBER_LENGTH);

  constructor() {}

  async play() {
    await this.#baseballGame.startGame();
  }
}
const app = new App();
app.play();
