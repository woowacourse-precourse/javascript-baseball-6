import BaseballController from './controller/BaseballController';

class App {
  #controller;

  constructor() {
    this.#controller = new BaseballController();
  }

  async play() {
    this.#controller.run();
  }
}

export default App;
const app = new App();
app.play();
