import BaseballModel from '../model/index.js';
import View from '../view/index.js';

class BaseBallController {
  #model;

  #view;

  constructor() {
    this.#view = View;
    this.#model = new BaseballModel();
  }

  run() {
    this.#view.printStart();
    this.#gamePlay();
  }

  #gamePlay() {
    this.#model.generateGameNumbers();
    this.#view.readGameNumbers();
  }
}

export default BaseBallController;
