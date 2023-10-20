import View from '../view/index.js';

class BaseBallController {
  #view;

  constructor() {
    this.#view = View;
  }

  run() {
    this.#view.printStart();
  }

  #gamePlay() {
    this.#view.readGameNumbers();
  }
}

export default BaseBallController;

