import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, RESET_OPTIONS, ERROR } from "./modules/Constants.js";
import Computer from "./modules/Computer.js";
import User from "./modules/User.js";
import CheckAnswer from "./modules/CheckAnswer.js";
class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.check = new CheckAnswer();
  }
  async play() {
    this.start();
    this.isPlaying();
  }

  start() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  }

  async isPlaying() {
    const ANSWER = this.computer.setNumber();

    while (true) {
      let userInput = await this.user.answerInput();
      let strike = await this.check.showResult(ANSWER, userInput);
      if (strike === 3) break;
    }
    MissionUtils.Console.print(MESSAGE.GAME_CLEAR);
    this.reset();
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
