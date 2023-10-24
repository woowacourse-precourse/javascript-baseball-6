import { MissionUtils } from "@woowacourse/mission-utils";
import InputUserNumber from "./components/InputUserNumber.js";
import CheckResult from "./components/CheckResult.js";
import CreateRandomNumber from "./components/CreateRandomNumber.js";
import PrintResult from "./components/PrintResult.js";
import RestartGame from "./components/RestartGame.js";

class App {
  async play() {
    const computerNumbers = CreateRandomNumber(); // RandomStart 함수 사용
    console.log(computerNumbers);

    let userNumbers;
    do {
      userNumbers = await InputUserNumber();
      console.log(userNumbers);
    } while (!PrintResult(CheckResult(userNumbers, computerNumbers)));
    RestartGame();
  }
}

export default App;

const app = new App();
app.play();
