import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computer = CustomUtils.getGenerateComputerNumbers();
      await CustomUtils.playGame(computer);
      await this.restartGame();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async restartGame() {
    if (await CustomUtils.getRestartChoice()) {
      this.play();
    } else {
      MissionUtils.Console.print(Messages.GAME_EXIT);
    }
  }
}

export default App;
