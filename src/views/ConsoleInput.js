import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/Constants.js";
import InputValidator from "../models/InputValidator.js";

const ConsoleInput = {
  async getUserInput() {
    const input = await Console.readLineAsync(MESSAGES.USER_INPUT);
    InputValidator.validateInput(input);
    return Array.from(input).map(Number);
  },

  async getRestartInput() {
    const input = await Console.readLineAsync(MESSAGES.GAME_RESTART);
    InputValidator.validateRestartInput(input);
    return parseInt(input);
  },
};

export default ConsoleInput;
