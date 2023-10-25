import { MissionUtils } from "@woowacourse/mission-utils";
import baseballGame from "./components/baseballGame.js";
import Messages from "./utils/Messages.js";
import Constants from "./utils/Constants.js";

class App {
  async play() {
    MissionUtils.Console.print(Messages.START);
    while (true) {
      await new baseballGame().start();
      const selectNumber = await MissionUtils.Console.readLineAsync(Messages.RESTART_OR_EXIT);
      if (selectNumber !== Constants.RESTART && selectNumber !== Constants.EXIT) {
        throw new Error(Messages.ERROR.INVALID_SELECT_NUMBER);
      }
      if (selectNumber === Constants.EXIT) {
        MissionUtils.Console.print(Messages.GAME_OVER);
        return;
      }
    }
  }
}

const app = new App();
app.play();

export default App;
