import { Console } from "@woowacourse/mission-utils";
import BaseballGame from "./components/baseballGame.js";
import Messages from "./utils/Messages.js";
import Constants from "./utils/Constants.js";

class App {
  async play() {
    Console.print(Messages.START);
    while (true) {
      await new BaseballGame().start();
      const selectNumber = parseInt(await Console.readLineAsync(Messages.RESTART_OR_EXIT));
      if (selectNumber !== Constants.RESTART && selectNumber !== Constants.EXIT) {
        throw new Error(Messages.ERROR.INVALID_SELECT_NUMBER);
      }
      if (selectNumber === Constants.EXIT) {
        break;
      }
    }
  }
}
export default App;
