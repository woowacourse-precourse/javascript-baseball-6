import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, RESET_OPTIONS, ERROR } from "./modules/Constants.js";
import Computer from "./modules/Computer.js";
import User from "./modules/User.js";
class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
  }
  async play() {
    this.start();
    this.computer.setNumber();
    this.reset();
  }

  start() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  }

  async reset() {
    try {
      const USER_INPUT = await this.user.resetInput();

      if (USER_INPUT === RESET_OPTIONS.RESET_NUMBER) this.play();
      if (USER_INPUT === RESET_OPTIONS.END_NUMBER) return;
    } catch (error) {
      throw error;
    }
  }
}

export default App;
