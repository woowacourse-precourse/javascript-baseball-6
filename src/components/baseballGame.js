import { Console } from "@woowacourse/mission-utils";
import { CreateNumber } from "./createNumber.js";
import { vaildateNumber } from "./vaildateNumber.js";
import { compareNumber } from "./compareNumber.js";
import Messages from "../util/Messages.js";

class BaseballGame {
  async start() {
    const randomNumber = new CreateNumber().randomNumber;
    while (true) {
      const inputNumber = await this.getUserInput();
      if (!vaildateNumber(inputNumber)) {
        throw new Error(Messages.ERROR.INVALID_BALL_NUMBER);
      }
      const userNumber = inputNumber.split("").map(Number);
      if (compareNumber(randomNumber, userNumber)) {
        Console.print(Messages.RESULT);
        break;
      }
    }
  }

  async getUserInput() {
    try {
      const inputNumber = await Console.readLineAsync(Messages.INPUT_NUMBER);
      return inputNumber;
    } catch (error) {
      throw new Error(Messages.ERROR.REJECTED_READLINE);
    }
  }
}

export default BaseballGame;
