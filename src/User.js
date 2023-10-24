import { MissionUtils } from "@woowacourse/mission-utils";
import { message } from "./constants/Message.js"
import { validateRetryGame, validateThreeDigitsNumber } from "./Validator.js";

class User {
  async inputNumber() {
    const userInput = await MissionUtils.Console.readLineAsync(message.INPUT_NUMBER);
    return validateThreeDigitsNumber(userInput);
  }

  async inputRetryOrEnd() {
    const userInput = await MissionUtils.Console.readLineAsync(message.QUEST_RETRY_GAME);
    return validateRetryGame(userInput);
  }

  printGameResult(outputMessage) {
    MissionUtils.Console.print(outputMessage);
  }
}

export default User
