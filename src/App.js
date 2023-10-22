import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "./messages/GameMessages.js";
import CustomUtils from "./utils/CustomUtils.js";

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
    const userNumber = await CustomUtils.getUserNumber();
    const score = CustomUtils.getScore(computer, userNumber);
    MissionUtils.Console.print(
      `컴퓨터: ${computer.join("")}, 사용자: ${userNumber.join("")}, 결과: ${
        score.ball
      }볼 ${score.strike}스트라이크`
    );
  }
}

export default App;
