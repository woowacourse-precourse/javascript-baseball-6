import ValidatorUtil from "../utils/ValidatorUtil.js";
import { ANSWER_LENGTH, COMMANDS, ERROR_MESSAGES } from "./constants.js";

class Validation {
  static validateUserNumbersInput(userResponse) {
    ValidatorUtil.validateLength(userResponse, ANSWER_LENGTH);
    ValidatorUtil.validateNotDuplicate(userResponse);
    ValidatorUtil.validateIsNumber(userResponse);
  }

  static validateGameTerminationInput(userResponse) {
    ValidatorUtil.validateLength(userResponse, 1);
    ValidatorUtil.validateIsNumber(userResponse);
    if (userResponse !== COMMANDS.RESTART && userResponse !== COMMANDS.EXIT) {
      throw new Error(ERROR_MESSAGES.INVALID_END_COMMAND);
    }
  }
}

export default Validation;
