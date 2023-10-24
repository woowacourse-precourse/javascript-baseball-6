import { ERROR_MESSAGE } from "../constants/Message";

class InputValid {
  static validate(input) {
    this.validateLength(input);
    this.validateNumberInRange(input);
    this.ensureNoDuplicateNumber(input);
  }

  static validateLength(input) {
    if (!input || typeof input !== 'string' || input.length !== 3) {
      throw new Error(`${ERROR_MESSAGE.invalidLength}`);
    }
  }

  static validateNumberInRange(input) {
    for (let char of input) {
      if (char < '1' || char > '9') {
        throw new Error(ERROR_MESSAGE.invaildNumber);
      }
    }
  }

  static ensureNoDuplicateNumber(input) {
    const distinctDigits = new Set(input);

    if (distinctDigits.size !== 3) {
      throw new Error(ERROR_MESSAGE.duplicateNumber);
    }
  }
}

export default InputValid;
