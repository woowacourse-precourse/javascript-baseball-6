import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_TEXT } from "./constants/string.js";

class App {
  async play() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1,9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    
    MissionUtils.Console.print(GAME_TEXT.START);
  }
}

export default App;

