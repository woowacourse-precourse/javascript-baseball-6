import { Console } from "@woowacourse/mission-utils";
import { makeRandomNumber, checkNumber } from "./gameUtil";
import { isValidNumber } from "./validation";
import { MESSAGE, ERROR_MESSAGE } from "./Constant";

class App {
  constructor() {
    this.first = true;
  }

  async play() {
    if (this.first) {
      Console.print(MESSAGE.GAME_START);
    }
    const computer = makeRandomNumber();
    while (true) {
      const user = await Console.readLineAsync(MESSAGE.INPUT_NUMBER);
      isValidNumber(user);
      const result = checkNumber(computer, user);
      if (result.strike === 3) {
        break;
      }
    }

    Console.print(MESSAGE.GAME_OVER);
    const endChoice = await Console.readLineAsync(MESSAGE.ASK_REPLAY);
    this.first = false;
    if (endChoice === "1") {
      await this.play();
    } else if (endChoice === "2") {
      return;
    } else {
      throw new Error(ERROR_MESSAGE.NOT_VALID_CHOICE);
    }
  }
}

export default App;
