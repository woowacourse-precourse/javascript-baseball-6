import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./components/baseballGame.js";
import Messages from "./util/Messages.js";
import Constants from "./util/Constants.js";

class App {
  async play() {
    Console.print(Messages.START);
    while (true) {
      await new BaseballGame().start();
      const selectNumber = Number(await this.getExitInput());
      if (selectNumber === Constants.EXIT) break;
      if (![Constants.RESTART, Constants.EXIT].includes(selectNumber)) throw new Error(Messages.ERROR.INVALID_SELECT_NUMBER);
    }
  }

  async getExitInput() {
    try {
      const userNumber = await Console.readLineAsync(Messages.RESTART_OR_EXIT);
      return userNumber;
    } catch (error) {
      throw new Error(Messages.ERROR.REJECTED_READLINE);
    }
  }
}
export default App;
