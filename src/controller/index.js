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
    this.#view.printStart();
    await this.#gamePlay();
  }

  // TODO : playGame으로 변경하기
  async #gamePlay() {
    this.#model.generateGameNumbers();
    await this.#guessNumber();
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
