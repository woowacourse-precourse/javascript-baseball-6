import Model from '../Model/Model.js';

import view from '../view/view.js';

const {
  readPlayerNum,
  readRestartEnd,
  printGameStart,
  printBallStrike,
  printBall,
  printStrike,
  printNothing,
  printThreeStrike,
  exit,
} = view;

export default class Controller {
  #model;

  constructor() {
    printGameStart();
  }

  mainGameController() {
    this.#model = new Model();
    return this.sendPlayerNum();
  }

  async sendPlayerNum() {
    const input = await readPlayerNum();
    if (input === 0){
      throw new Error('[ERROR]');
      }
    return this.ballCountController(input);
  }

  ballCountController(input) {
    this.#model.savePlayerNum(input);
    if (this.#model.getOpponentNum() !== this.#model.getPlayerNum()) {
      this.ballCountOutputController();
      return this.sendPlayerNum();
    }
    if (this.#model.getOpponentNum() === this.#model.getPlayerNum()) {
      printThreeStrike();
      this.endController();
    }
  }

  ballCountOutputController() {
    const ballCount = this.#model.getBall();
    const strikeCount = this.#model.getStrike();

    if (ballCount > 0 && strikeCount > 0) {
      printBallStrike(ballCount, strikeCount);
    }
    if (ballCount > 0 && strikeCount === 0) {
      printBall(ballCount);
    }
    if (ballCount === 0 && strikeCount > 0) {
      printStrike(strikeCount);
    }
    if (ballCount === 0 && strikeCount === 0) {
      printNothing();
    }
  }

  async endController() {
    const input = await readRestartEnd();
    if (input === 0){
      throw new Error('[ERROR]');
      }
    return this.gameEnd(input);
  }

  async gameEnd(input) {
    if (input === '1') {
      return this.mainGameController();
    }
    if (input === '2') {
      return exit();
    }
  }
}
