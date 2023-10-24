import BaseBallController from './controller/index.js';

class App {
  /**
   * @private
   * @type {BaseBallController}
   */
  #controller;

  constructor() {
    this.#controller = new BaseBallController();
  }

  async play() {
    await this.#controller.run();
  }
}

export default App;
