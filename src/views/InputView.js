import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../models/InputValidator.js";
import { MESSAGES } from "../constants/StringMessages.js";

const InputView = {

  async getUserNumber (message) {
    const userNumber = await Console.readLineAsync(message);
    
    if (!InputValidator.numberValidate(userNumber)) throw new Error (MESSAGES.INPUT_ERROR);

    return parseInt(userNumber);
  },

  async getUserCommand (message) {
    const userCommand = await Console.readLineAsync(message);

    if (!InputValidator.commandValidate(userCommand)) throw new Error (MESSAGES.INPUT_ERROR);

    return parseInt(userCommand);
  }
}

export default InputView;