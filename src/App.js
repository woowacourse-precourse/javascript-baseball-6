import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computer = CustomUtils.getGenerateComputerNumbers();
      await this.playGame(computer);
      await this.restartGame();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  async playGame(computer) {
    MissionUtils.Console.print(Messages.GAME_START);
    let gameContinue = true;
    while (gameContinue) {
      const userNumber = await CustomUtils.getUserNumber();
      const score = CustomUtils.getScore(computer, userNumber);
      gameContinue = CustomUtils.printScore(score);
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
