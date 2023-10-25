import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant/Constant.js";
import Computer from "./Computer/Computer.js";
import NumCompare from "./Computer/NumCompare.js";
import User from "./User/User.js";

class App {
  constructor() {
    this.user = new User();  
    this.numCompare = new NumCompare(); 
    this.isRunning = true;
  }

  async play() {
    while (this.isRunning) {
      const computer = new Computer();
      const START = computer.makeAnswer();

      MissionUtils.Console.print(MESSAGE.START);

      let result;
      while (result !== "3스트라이크") {
        const userInput = await this.user.getInput();
        result = this.numCompare.checkAnswer(userInput, START);
        MissionUtils.Console.print(result);
      }

      MissionUtils.Console.print(MESSAGE.END);

      const replayInput = await this.user.getReplay();

      if (replayInput === "2") {
        this.isRunning = false;
      }
    }
  }
}

export default App;
