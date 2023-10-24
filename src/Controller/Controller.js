import Model from '../Model/Model.js';
import outputView from '../view/outputView.js';
import inputView from '../view/inputView.js';

export default class Controller {
  #model;

  constructor() {
    outputView.printGameStart();
  }

  mainGameController() {
    this.#model = new Model();

    return this.sendPlayerNum();
  }

  async sendPlayerNum() {
    const input = await inputView.readPlayerNum();

    return this.ballCountController(input);
  }

  ballCountController(input) {
    this.#model.savePlayerNum(input);
    if (this.#model.getOpponentNum() !== this.#model.getPlayerNum()) {
      this.ballCountOutputController();

      return this.sendPlayerNum();
    }
    if (this.#model.getOpponentNum() === this.#model.getPlayerNum()) {
      outputView.printThreeStrike();

      return this.endController();
    }
  }

  ballCountOutputController() {
    const ballCount = this.#model.getBall();
    const strikeCount = this.#model.getStrike();

    if (ballCount > 0 || strikeCount > 0) {
      return outputView.printBallStrike(ballCount, strikeCount);
    }
    if (ballCount === 0 && strikeCount === 0) {
      return outputView.printNothing();
    }
  }

  async endController() {
    const input = await inputView.readRestartEnd();

    if (input === '1') {
      return this.mainGameController();
    }
    if (input === '2') {
      return outputView.exit();
    }
  }
}
