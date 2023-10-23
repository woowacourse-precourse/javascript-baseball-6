import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computer = this.generateComputerNumbers();
      await this.playGame(computer);
      await this.restartGame();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }

  generateComputerNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
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
