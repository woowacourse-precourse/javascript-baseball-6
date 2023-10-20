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
}

const app = new App();
app.play();

export default App;
