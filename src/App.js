//import readline from "readline";
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT, ERROR, RESTART } from "./constants.js";

class App {
  constructor() {
    this.initialPrint();
  }

  initialPrint() {
    MissionUtils.Console.print(TEXT.INITIAL);
  }

  async play() {
    this.computerNumber = this.makeRandomNumber();
    MissionUtils.Console.print(this.computerNumber);
    await this.inputGuessNumber();
  }

  //추측값 입력
  async inputGuessNumber() {
    try {
      const guess = await MissionUtils.Console.readLineAsync(
        TEXT.INPUT_GUESS_NUMBER
      );

      if (!this.duplicateCheck(guess)) {
        throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
      }

      this.countBallAndStrike(this.computerNumber, guess);
    } catch (error) {
      throw error;
      //throw new Error(ERROR.DUPLICATE_NUMBER_ERROR);
    }
  }
}

const app = new App();
app.play();

export default App;
