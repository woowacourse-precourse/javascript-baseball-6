import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Constants.js";
import InputValidator from "../models/InputValidator.js";

const ConsoleInput = {
  async getUserInput() {
    const input = await Console.readLineAsync(MESSAGES.USER_INPUT);
    InputValidator.validateInput(input);
    return input;
  },
};

export default ConsoleInput;
