import Model from "../Model/Model.js";
import { GAME, GAME_MESSAGE, NUMBER_LENGTH } from "../utils/Constant.js";
import { validateEndInputNumber } from "../utils/validateNumber.js";
import View from "../View/View.js";

class Baseball {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.restart = false;
  }

  async init() {
    try {
      !this.restart ? this.view.printMessage(GAME_MESSAGE.start) : "";

      await this.start(this.model.makeComputerRandomNumber());
    } catch (err) {
      this.view.printMessage(err.message);
      throw err;
    }
  }

  async start(randomNumbers) {
    try {
      const userNumberInput = await this.view.readLineInput(GAME_MESSAGE.play);
      const [ballCount, strikeCount] = this.model.compareNumbers(randomNumbers, userNumberInput);

      this.view.printHint(ballCount, strikeCount);

      strikeCount === NUMBER_LENGTH ? await this.quit() : await this.start(randomNumbers);
    } catch (err) {
      throw err;
    }
  }

  async quit() {
    try {
      this.view.printMessage(GAME_MESSAGE.playEnd);

      const restartStateInput = await this.view.readLineInput(GAME_MESSAGE.restart);

      validateEndInputNumber(restartStateInput);
      this.restartOrEnd(restartStateInput);
    } catch (err) {
      throw err;
    }
  }

  restartOrEnd(restartStateInput) {
    if (restartStateInput === GAME.restart) {
      this.restart = true;
      this.init();
    }
    if (restartStateInput === GAME.end) {
      this.view.printMessage(GAME_MESSAGE.gameEnd);
      process.exitCode = 0;
    }
  }
}

const baseball = new Baseball();

export default baseball;
