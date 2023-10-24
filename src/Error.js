import { BASEBALL, ERROR, REGEXP } from './Constant.js';

class ErrorHandler {
  baseballNumberCheck(userInput) {
    if (REGEXP.IS_NOT_NUMBER.test(userInput)) {
      throw new Error(ERROR.NUMBER_TYPE);
    }
    if (userInput.length !== BASEBALL.MAX_LENGTH) {
      throw new Error(ERROR.NUMBER_LENGTH);
    }
    if (new Set(userInput).size !== BASEBALL.MAX_LENGTH) {
      throw new Error(ERROR.NUMBER_OVERLAP);
    }
  }

  resetNumberCheck(userInput) {
    const resetOptions = [BASEBALL.RESET_NUMBER, BASEBALL.END_NUMBER];

    if (!resetOptions.includes(userInput)) {
      throw new Error(ERROR.RESET_NUMBER);
    }
  }
}

export default ErrorHandler;