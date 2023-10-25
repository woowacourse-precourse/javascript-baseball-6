import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE, RESET_OPTIONS } from "./utils/Constants.js";
import User from "./utils/User.js";
import CheckAnswer from "./utils/CheckAnswer.js";
class App {
  constructor() {
    this.user = new User();
    this.check = new CheckAnswer();
    this.start = this.start();
  }

  start() {
    return MissionUtils.Console.print(MESSAGE.GAME_START);
  }

  async play() {
    try {
      while (true) {
        let userInput = await this.user.answerInput();
        let strike = await this.check.showResult(userInput);
        if (strike === 3) break;
      }
      MissionUtils.Console.print(MESSAGE.GAME_CLEAR);
      this.reset();
    } catch (error) {
      throw error;
    }
  }

  async reset() {
    try {
      const USER_INPUT = await this.user.resetInput();

      if (USER_INPUT === RESET_OPTIONS.RESET_NUMBER) {
        this.check = new CheckAnswer();
        this.play();
      }
      if (USER_INPUT === RESET_OPTIONS.END_NUMBER) return;
    } catch (error) {
      throw error;
    }
  }
}

export default App;
