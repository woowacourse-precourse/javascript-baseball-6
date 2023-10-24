import { Console } from "@woowacourse/mission-utils";
import { ERRORMESSAGE } from "../constants/Message";

export default class User {
  async getNumber() {
    Console.print("숫자를 입력해주세요 : ");
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
      this.throwErrorMessage(ERRORMESSAGE.invalidLength);
    }
  }

  validateZeroIncluded(input) {
    if (input.includes("0")) {
      this.throwErrorMessage(ERRORMESSAGE.zeroIncluded);
    }
  }

  validateNonNumber(input) {
    if (input.split("").some((num) => isNaN(num))) {
      this.throwErrorMessage(ERRORMESSAGE.nonNumber);
    }
  }

  validateDuplicateNumber(input) {
    if (input.split("").some((num, index, arr) => arr.indexOf(num) !== index)) {
      this.throwErrorMessage(ERRORMESSAGE.duplicateNumber);
    }
  }

  validateSpaceIncluded(input) {
    if (input.includes(" ")) {
      this.throwErrorMessage(ERRORMESSAGE.spaceIncluded);
    }
  }

  throwErrorMessage(message) {
    throw new Error(message);
  }
}