import BaseballController from './controller/BaseballController.js';

export default class App {
  play = async () => {
    this.controller = await new BaseballController();
    await this.controller.play();
  };
}

// new App().play();
