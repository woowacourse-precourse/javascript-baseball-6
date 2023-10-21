import { MissionUtils } from "@woowacourse/mission-utils";
import { createNumber } from "./utility.js";
import { playRound } from "./gameLogic.js";
import { restartGameDecision } from "./consoleUI.js";

class App {
  async play() {
    let gameContinue = true;

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    while (gameContinue) {
      const comNumber = createNumber();

      while (true) {
        try {
          if (await playRound(comNumber)) {
            gameContinue = await restartGameDecision();
            break;
          }
        } catch (error) {
          if (error.message === "입력한 값이 숫자가 아닙니다.") {
            return;
          }
        }
      }
    }
  }
}

const app = new App();
app.play();

export default App;
