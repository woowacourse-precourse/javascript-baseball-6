import generateRandomNumber from "./randomNumber.js";
import successCheck from "./successCheck.js";
import { Console } from "@woowacourse/mission-utils";
import { userInputValidation, userInput } from "./userInput.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    try {
      await this.createComputerNumber();
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }
  async createComputerNumber() {
    this.computerNumber = generateRandomNumber();
    await this.userInputCheck();
  }

  async userInputCheck() {
    this.userNumber = await userInput();
    const isValidationSuccess = userInputValidation(this.userNumber);
    if (isValidationSuccess) await this.scoreResult();
    else throw new Error("숫자가 잘못된 형식입니다.");
  }

  async scoreResult() {
    const isSuccess = successCheck(this.computerNumber, this.userNumber);
    if (isSuccess) this.gameClear();
    else return this.userInputCheck();
  }

  gameClear() {
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    this.gameRestartCheck();
  }

  async gameRestartCheck() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    const isGameRestart = await Console.readLineAsync("");
    if (isGameRestart === "1") return this.createComputerNumber();
    else if (isGameRestart !== "2") return this.gameRestartCheck();
  }
}

const app = new App();
app.play();
export default App;
