import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_MESSAGE } from "../constants/Message";

export default class User {
  async getNumber() {
    Console.print(GAME_MESSAGE.inputNumberPrompt);
    const playerInput = await Console.readLineAsync("");

    this.checkInputValidation(playerInput);

    return playerInput;
  }

  checkInputValidation(input) {
    this.validateInputLength(input);
    this.validateZeroIncluded(input);
    this.validateNonNumber(input);
    this.validateDuplicateNumber(input);
    this.validateSpaceIncluded(input);
  }

  validateInputLength(input) {
    if (input.length !== 3) {
      this.throwErrorMessage(ERROR_MESSAGE.invalidLength);
    }
  }

  validateZeroIncluded(input) {
    if (input.includes("0")) {
      this.throwErrorMessage(ERROR_MESSAGE.zeroIncluded);
    }
  }

  validateNonNumber(input) {
    if (input.split("").some((num) => isNaN(num))) {
      this.throwErrorMessage(ERROR_MESSAGE.nonNumber);
    }
  }

  validateDuplicateNumber(input) {
    if (input.split("").some((num, index, arr) => arr.indexOf(num) !== index)) {
      this.throwErrorMessage(ERROR_MESSAGE.duplicateNumber);
    }
  }

  validateSpaceIncluded(input) {
    if (input.includes(" ")) {
      this.throwErrorMessage(ERROR_MESSAGE.spaceIncluded);
    }
  }

  throwErrorMessage(message) {
    throw new Error(message);
  }
}