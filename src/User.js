import { MESSAGE } from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";

import {
  areDigitsUnique,
  isNotEmpty,
  isValidNumber,
} from "./utils/inputValidator.js";
import { Console } from "@woowacourse/mission-utils";

class User {
  constructor() {
    this.numberArray = [];
  }

  async getValidatedNumberArray() {
    const input = await Console.readLineAsync(MESSAGE.ENTER_NUMBER);

    this.numberArray = this.validateUserInput(input)
      .split("")
      .map((string) => +string);
  }

  validateUserInput(input) {
    if (!isNotEmpty(input)) throw new Error(ERROR.EMPTY_INPUT);
    if (!isValidNumber(input)) throw new Error(ERROR.INVALID_NUMBER);
    if (!areDigitsUnique(input)) throw new Error(ERROR.NON_UNIQUE_DIGITS);

    return input;
  }
}

export default User;
