import { MissionUtils } from "@woowacourse/mission-utils";
import player from "./player.js";
import computer from "./computer.js";
import result from "./result.js";
import repeatQuestion from "./repeatQuestion.js";
import check from "./check.js";

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    let computerPickNumber = computer();
    while (true) {
      const playerInputNumber = await player();
      check(playerInputNumber);
      const score = result(playerInputNumber, computerPickNumber);
      MissionUtils.Console.print(score);
      if (score == "3스트라이크") {
        const answer = await repeatQuestion();
        if (answer == "1") {
          computerPickNumber = computer();
        }
        if (answer == "2") {
          break;
        }
      }
    }
  }
}

export default App;