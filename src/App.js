import BaseballController from './controller/baseballController.js';
import { MissionUtils } from '@woowacourse/mission-utils';
class App {
  constructor() {
    this.controller = new BaseballController();
  }
  async play() {
    await this.controller.play();
  }
}
const app = new App();

async function game() {
  try {
    app.play();
  } catch (e) {
    MissionUtils.Console.print(`${e}`);
  }
}
game();
export default App;
