import { MissionUtils } from "@woowacourse/mission-utils";
import InputUserNumber from "./components/InputUserNumber.js";
import CheckResult from "./components/CheckResult.js";
import CreateRandomNumber from "./components/CreateRandomNumber.js";
import PrintResult from "./components/PrintResult.js";
import RestartGame from "./components/RestartGame.js";

class App {
  async play() {
    let computerNumbers = CreateRandomNumber(); // RandomStart 함수 사용
    console.log(computerNumbers);

    let userNumbers;
    do {
      userNumbers = await InputUserNumber();
      console.log(userNumbers);

      if (PrintResult(CheckResult(userNumbers, computerNumbers))) {
        const RESTART = await RestartGame();
        if (RESTART) {
          computerNumbers = CreateRandomNumber(); // RandomStart 함수 사용
          console.log(computerNumbers);
        } else {
          break;
        }
      }
    } while (true);
  }
}

export default App;

const app = new App();
app.play();
