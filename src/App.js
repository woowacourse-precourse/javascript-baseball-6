import BaseBallController from './controller/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseBallController();
  }

  async play() {
    await this.#controller.run();
  }
}

export default App;

const app = new App();
app.play();
