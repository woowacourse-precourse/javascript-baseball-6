import BaseballController from './controller/BaseballController.js';

export default class App {
  async play() {
    this.controller = new BaseballController();
    this.controller.play();
  }
}

const app = new App();
app.play();
