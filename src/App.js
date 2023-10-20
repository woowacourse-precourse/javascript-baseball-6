import BaseBallController from './controller/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseBallController();
  }

  async play() {
    this.#controller.run();
  }
}

const app = new App();
app.play();

export default App;

