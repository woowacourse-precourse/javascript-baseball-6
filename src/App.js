import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "./utils/Constants.js";
import Computer from "./utils/Computer.js";
class App {
  async play() {
    this.start();

    const COMPUTER = new Computer();
    COMPUTER.setNumber();
  }

  start() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  }
}

export default App;
