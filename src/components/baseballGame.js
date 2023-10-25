import { MissionUtils } from "@woowacourse/mission-utils";
import { createNumber } from "./CreateNumber.js";
import { validateNumber } from "./validateNumber.js";
import { compareNumber } from "./CompareNumber.js";
import Messages from "../utils/Messages.js";

class baseballGame {
  async start() {
    const randomNumber = new createNumber().randomNumber;
    while (true) {
      const inputNumber = await MissionUtils.Console.readLineAsync(Messages.INPUT_NUMBER);
      if (!validateNumber(inputNumber)) {
        throw new Error(Messages.ERROR.INVALID_BALL_NUMBER);
      }
      const userNumber = inputNumber.split("").map((v) => parseInt(v));
      if (compareNumber(randomNumber, userNumber)) {
        MissionUtils.Console.print(Messages.RESULT);
        break;
      }
    }
  }
}

export default baseballGame;
