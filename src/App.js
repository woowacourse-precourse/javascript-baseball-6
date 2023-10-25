import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME } from "./pages/texts.js";
import {
  inputUserNumber,
  checkResult,
  createRandomNumber,
  printResult,
  restartGame,
} from "./pages/modules.js";

class App {
  async play() {
    MissionUtils.Console.print(GAME.START);
    let computerNumbers = createRandomNumber();
    let RESTART = true;
    do {
      let userNumbers = await inputUserNumber();
      if (printResult(checkResult(userNumbers, computerNumbers))) {
        RESTART = await restartGame();
        if (RESTART) computerNumbers = createRandomNumber();
      }
    } while (RESTART);
  }
}

export default App;

// const app = new App();
// app.play();
