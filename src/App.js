import generateRandomNumber from "./randomNumber.js";
import userInput from "./userInput.js";
import scoreCheck from "./scoreCheck.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.createComputerNumber();
  }

  createComputerNumber() {
    this.computerNumber = generateRandomNumber();
    this.userInputCheck();
  }

  async userInputCheck() {
    this.userNumber = await userInput();
    this.scoreResult(this.userNumber);
  }

  scoreResult() {
    scoreCheck(this.computerNumber, this.userNumber);
    this.userInputCheck();
  }
}

const app = new App();
app.play();

export default App;
