import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

class App {
  async play() {
    try {
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }
      MissionUtils.Console.print(Messages.GAME_START);
      let gameContinue = true;
      while (gameContinue) {
        const userNumber = await CustomUtils.getUserNumber();
        if (!userNumber) return;
        const score = CustomUtils.getScore(computer, userNumber);
        MissionUtils.Console.print(computer, score);
        gameContinue = CustomUtils.printScore(score);
      }
      if (await CustomUtils.getRestartChoice()) {
        this.play();
      } else {
        MissionUtils.Console.print(Messages.GAME_EXIT);
      }
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
