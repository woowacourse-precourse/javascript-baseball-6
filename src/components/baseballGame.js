import { MissionUtils } from "@woowacourse/mission-utils";
import { CreateNumber } from "./createNumber.js";
import { validateNumber } from "./validateNumber.js";
import { compareNumber } from "./compareNumber.js";
import Messages from "../utils/Messages.js";

class BaseballGame {
  async start() {
    const randomNumber = new CreateNumber().randomNumber;
    while (true) {
      const inputNumber = await MissionUtils.Console.readLineAsync(Messages.INPUT_NUMBER);
      if (!validateNumber(inputNumber)) {
        throw new Error(Messages.ERROR.INVALID_BALL_NUMBER);
      }
      const userNumber = inputNumber.split("").map(Number);
      if (compareNumber(randomNumber, userNumber)) {
        MissionUtils.Console.print(Messages.RESULT);
        break;
      }
    }
  }
}

export default BaseballGame;
