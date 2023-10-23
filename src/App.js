import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computer = CustomUtils.getGenerateComputerNumbers();
      await CustomUtils.playGame(computer);
      await CustomUtils.getRestartChoice(() => this.play());
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
