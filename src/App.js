import { MissionUtils } from "@woowacourse/mission-utils";
import {
  inputUserNumber,
  checkResult,
  createRandomNumber,
  printResult,
  restartGame,
} from "./pages/modules.js";

class App {
  async play() {
    let computerNumbers = createRandomNumber();
    // console.log(computerNumbers);

    let userNumbers;
    do {
      userNumbers = await inputUserNumber();
      // console.log(userNumbers);

      if (printResult(checkResult(userNumbers, computerNumbers))) {
        const RESTART = await restartGame();
        if (RESTART) {
          computerNumbers = createRandomNumber();
          console.log(computerNumbers);
        } else {
          break;
        }
      }
    } while (true);
  }
}

export default App;

// const app = new App();
// app.play();
