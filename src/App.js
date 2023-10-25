import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "./modules/Constants.js";
import Computer from "./modules/Computer.js";
class App {
  constructor() {
    this.computer = new Computer();
  }
  async play() {
    this.start();
    this.computer.setNumber();
  }

  start() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  }
}

export default App;
