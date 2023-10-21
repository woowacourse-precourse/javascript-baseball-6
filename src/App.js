import BaseBallController from './controller/index.js';
import View from './view/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseBallController();
  }

  async play() {
    View.printStart();
    await this.#controller.run();
  }
}

export default App;

const app = new App();
app.play();
