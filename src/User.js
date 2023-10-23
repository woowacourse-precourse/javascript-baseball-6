import { MESSAGE } from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";

import {
  areDigitsUnique,
  isNotEmpty,
  isValidNumber,
} from "./utils/inputValidator.js";
import { Console } from "@woowacourse/mission-utils";

class User {
  #numberArray;

  constructor() {
    this.#numberArray = [];
  }

  get numberArray() {
    return this.#numberArray;
  }

  async setValidatedInputArray() {
    const input = await this.getInputFromUser();

    this.#numberArray = this.validateUserInput(input)
      .split("")
      .map((string) => +string);
  }

  async getInputFromUser() {
    return await Console.readLineAsync(MESSAGE.ENTER_NUMBER);
  }

  validateUserInput(input) {
    if (!isNotEmpty(input)) throw new Error(ERROR.EMPTY_INPUT);
    if (!isValidNumber(input)) throw new Error(ERROR.INVALID_NUMBER);
    if (!areDigitsUnique(input)) throw new Error(ERROR.NON_UNIQUE_DIGITS);

    return input;
  }
}

export default User;
