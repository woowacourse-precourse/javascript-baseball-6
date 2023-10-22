import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";

class App {
  async play() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    MissionUtils.Console.print(Messages.GAME_START);
  }
}

export default App;
