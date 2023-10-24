import BaseballDirector from './controller/BaseballDirector.js';

export default class App {
  play = async () => {
    this.controller = new BaseballDirector();
    await this.controller.play();
  };
}
