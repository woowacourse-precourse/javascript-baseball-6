import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/GameConfig.js";
import { userInputNumberValidation } from "./utills/InputValidation.js";
import Computer from "./Computer.js";
class App {
  #computer;

  constructor() {
    this.#computer = new Computer();
  }

  #showStartMessage() {
    MissionUtils.Console.print(MESSAGE.GAME.START);
  }

  async setUserInput(randomNumber) {
    console.log(randomNumber);
    try {
      const inputNumber = await MissionUtils.Console.readLineAsync(MESSAGE.GAME.INPUT_NUMBER);
      const userInputNumber = userInputNumberValidation(inputNumber);
      const baseBallCount = this.#computer.calcBallStrike(userInputNumber, randomNumber);
      if (baseBallCount.strike === 3) {
        MissionUtils.Console.print(MESSAGE.GAME.FINISH);
        this.gameRestart();
      } else {
        this.setUserInput(randomNumber);
      }
    } catch (error) {
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    }
  }

  async gameRestart() {
    try {
      const userInput = await MissionUtils.Console.readLineAsync(`${MESSAGE.GAME.RESTART}\n`);

      if (userInput === "1") {
        this.setUserInput(this.#computer.setRandomNumber());
      } else if (userInput === "2") {
        MissionUtils.Console.print(MESSAGE.GAME.END);
      } else {
        throw error();
      }
    } catch (error) {
      throw new Error(MESSAGE.ERROR.WRONG_VALUE);
    }
  }

  async gameStart() {
    this.#showStartMessage();
    await this.setUserInput(this.#computer.setRandomNumber());
  }

  async play() {
    await this.gameStart();
  }
}

const app = new App();
app.play();

export default App;
