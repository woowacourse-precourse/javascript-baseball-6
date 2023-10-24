import BaseballController from './controller/baseballController.js';
import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.controller = new BaseballController();
  }
  async play() {
    try {
      await this.controller.play();
    } catch (e) {
      MissionUtils.Console.print(`${e}`);
      throw e;
    }
  }
}
const app = new App();

app.play();

export default App;
