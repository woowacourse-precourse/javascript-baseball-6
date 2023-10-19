import generateRandomNumber from "./randomNumber.js";
import userInput from "./userInput.js";
import successCheck from "./successCheck.js";
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
    const isSuccess = successCheck(this.computerNumber, this.userNumber);
    isSuccess ? this.gameClear() : this.userInputCheck();
  }

  async gameClear() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const gameRestart = await Console.readLineAsync("");
    
  }
}

const app = new App();
app.play();

export default App;
