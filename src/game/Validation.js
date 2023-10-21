import InputValidator from "../utils/InputValidator.js";

class Validation {
  static validateUserNumbersInput(userResponse) {
    InputValidator.validateLength(userResponse, 3);
    InputValidator.validateNotDuplicate(userResponse);
    InputValidator.validateIsNumber(userResponse);
  }

  static validateGameTerminationInput(userResponse) {
    InputValidator.validateLength(userResponse, 1);
    InputValidator.validateIsNumber(userResponse);
    if (userResponse !== "1" && userResponse !== "2") {
      throw new Error("[ERROR] 입력값이 1 또는 2가 아닙니다.");
    }
  }
}

export default Validation;
