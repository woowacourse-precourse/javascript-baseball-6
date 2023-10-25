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
    const USER_INPUT = await this.user.answerInput();
    // this.user.answerInput();
    let result = this.check.countCorrectNumber(ANSWER, USER_INPUT);
    MissionUtils.Console.print(result);
    // let result = { strike: 0 };
    // while (result.strike !== 3) {
    //   try {
    //     await this.user.answerInput();
    //     return result;
    //   } catch (error) {
    //     throw error;
    //   }
    // }
    // this.reset();
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
