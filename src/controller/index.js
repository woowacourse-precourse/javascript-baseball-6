import BaseballModel from '../model/index.js';
import View from '../view/index.js';

class BaseBallController {
  #model;

  #view;

  constructor() {
    this.#view = View;
    this.#model = new BaseballModel();
  }

  async run() {
    this.#model.generateGameNumbers();
    await this.#guessNumber();
    const userAnswer = await this.#view.readGameCommand();
    if (userAnswer === '1') {
      this.run();
    }
  }

  // TODO : no-await-in-loop 정리
  async #guessNumber() {
    while (true) {
      const userNumbers = await this.#view.readGameNumbers();
      const score = this.#model.compareUserWithComputerNumbers(userNumbers);
      this.#view.printHint(score);
      if (score.strike === 3) {
        this.#view.printSuccess();
        break;
      }
    }
  }
}

export default BaseBallController;
