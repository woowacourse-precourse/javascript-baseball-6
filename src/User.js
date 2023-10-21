import MESSAGE from "./constant/MESSAGE.js";
import ERROR from "./constant/ERROR.js";

class User {
  constructor(consoleUtils) {
    this.numberArray = [];
    this.consoleUtils = consoleUtils;
  }

  async getValidatedNumberArray() {
    const input = await this.consoleUtils.readLineAsync(MESSAGE.ENTER_NUMBER);

    this.numberArray = this.validateUserInput(input)
      .split("")
      .map((string) => +string);
  }

  validateUserInput(input) {
    if (!this.isNotEmpty(input)) throw new Error(ERROR.EMPTY_INPUT);
    if (!this.isValidNumber(input)) throw new Error(ERROR.INVALID_NUMBER);
    if (!this.areDigitsUnique(input)) throw new Error(ERROR.NON_UNIQUE_DIGITS);

    return input;
  }

  isNotEmpty(input) {
    return input !== null && input.trim() !== "";
  }

  isValidNumber(input) {
    return /^[1-9]{3}$/.test(input);
  }

  areDigitsUnique(input) {
    const uniqueDigits = [...new Set(input)];
    return uniqueDigits.length === input.length;
  }
}

export default User;
