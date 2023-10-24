import { MissionUtils } from "@woowacourse/mission-utils";
import inputUserNumber from "./components/inputUserNumber.js";
import checkResult from "./components/checkResult.js";
import createRandomNumber from "./components/createRandomNumber.js";
import printResult from "./components/printResult.js";
import restartGame from "./components/restartGame.js";

class App {
  async play() {
    let computerNumbers = createRandomNumber(); // RandomStart 함수 사용
    console.log(computerNumbers);

    let userNumbers;
    do {
      userNumbers = await inputUserNumber();
      console.log(userNumbers);

      if (printResult(checkResult(userNumbers, computerNumbers))) {
        const RESTART = await restartGame();
        if (RESTART) {
          computerNumbers = createRandomNumber(); // RandomStart 함수 사용
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
