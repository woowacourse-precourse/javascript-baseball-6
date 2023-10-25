import Controller from './controller/controller.js';

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  async play() {
    await this.#controller.play();
  }
}

export default App;
