import { Console } from "@woowacourse/mission-utils";
import User from "./utils/User.js";
import Computer from "./utils/Computer.js";
import Control from "./utils/Control.js";
import { ERROR_MESSAGE, GUIDE_TEXT } from "./constant.js";

class App {
  constructor() {
    this.computerNumber = "";
    this.isPlaying = true;
    this.user = new User();
    this.computer = new Computer();
    this.control = new Control(this);
  }

  async play() {
    this.control.startGame();
    this.control.assignComputerNumber();
    try {
      while (this.isPlaying) {
        const input = await this.user.getUserChoice();
        const result = this.control.compareNumbers(input);

        if (result) {
          const reset = await Console.readLineAsync(GUIDE_TEXT.RESTART);

          if (reset === "1") {
            this.control.assignComputerNumber();
            continue;
          } else if (reset === "2") {
            this.control.endGame();
          } else {
            throw new Error(ERROR_MESSAGE.INVALID_PATTERN);
          }
        }
      }
    } catch (error) {
      Console.print(ERROR_MESSAGE.ERROR_WHILE_PLAYING);
      throw error;
    }
  }
}

export default App;