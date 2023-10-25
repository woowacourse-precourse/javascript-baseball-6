import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./components/baseballGame.js";
import Messages from "./utils/Messages.js";
import Constants from "./utils/Constants.js";

class App {
  async play() {
    Console.print(Messages.START);
    while (true) {
      await new BaseballGame().start();
      const selectNumber = Number(await this.getExitInput());
      if (![Constants.RESTART, Constants.EXIT].includes(selectNumber)) {
        throw new Error(Messages.ERROR.INVALID_SELECT_NUMBER);
      }
      if (selectNumber === Constants.EXIT) {
        break;
      }
    }
  }

  async getExitInput() {
    try {
      const selectNumber = await Console.readLineAsync(Messages.RESTART_OR_EXIT);
      return selectNumber;
    } catch (error) {
      throw new Error(Messages.ERROR.REJECTED_READLINE);
    }
  }
}
export default App;
