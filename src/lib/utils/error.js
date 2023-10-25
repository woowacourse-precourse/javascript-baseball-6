const { ERROR_MESSAGE } = require("../constants/message.js");
const { WORD } = require("../constants/word.js");

class InputError {
  validateInputExist(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.INPUT_EXIST_ERROR);
    }
  }
  validateInputLength(input) {
    if (input.length !== 3) {
      throw new Error(ERROR_MESSAGE.INPUT_USER_NUMBER_LENGTH_ERROR);
    }
  }

  validateInputDataType(input) {
    if (isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.INPUT_DATA_TYPE_ERROR);
    }
  }

  validateIsPositiveNumber(input) {
    if (Number(input) < 0) {
      throw new Error(
        ERROR_MESSAGE.INPUT_USER_NUMBER_LPOSITIVE_NUMBER_ERRORENGTH_ERROR
      );
    }
  }

  validateNumberDuplicate(input) {
    const existedNumber = new Set();
    for (let i = 0; i < input.length; i++) {
      if (existedNumber.has(input[i])) {
        throw new Error(ERROR_MESSAGE.INPUT_DUPLICATE_ERROR);
      } else {
        existedNumber.add(input[i]);
      }
    }
  }

  validateRetryInput(input) {
    const option = [WORD.RETRY, WORD.EXIT];
    if (!option.includes(input)) {
      throw new Error(ERROR_MESSAGE.INPUT_REPLAY_TYPE_ERROR);
    }
  }

  validateUserInput(input) {
    this.validateInputExist(input);
    this.validateInputLength(input);
    this.validateInputDataType(input);
    this.validateIsPositiveNumber(input);
    this.validateNumberDuplicate(input);
  }
}

module.exports = InputError;
