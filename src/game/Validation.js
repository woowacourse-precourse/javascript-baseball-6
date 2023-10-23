import InputValidator from "../utils/InputValidator.js";
import { ANSWER_LENGTH, COMMANDS } from "./constants.js";

class Validation {
  static validateUserNumbersInput(userResponse) {
    InputValidator.validateLength(userResponse, ANSWER_LENGTH);
    InputValidator.validateNotDuplicate(userResponse);
    InputValidator.validateIsNumber(userResponse);
  }

  static validateGameTerminationInput(userResponse) {
    InputValidator.validateLength(userResponse, 1);
    InputValidator.validateIsNumber(userResponse);
    if (userResponse !== COMMANDS.RESTART && userResponse !== COMMANDS.EXIT) {
      throw new Error("[ERROR] 입력값이 1 또는 2가 아닙니다.");
    }
  }
}

export default Validation;
