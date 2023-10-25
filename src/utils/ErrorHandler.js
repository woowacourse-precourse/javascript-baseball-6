import { RESET_OPTIONS, ERROR } from "./Constants.js";

class ErrorHandler {
  constructor() {}

  answerNumberCheck(input) {
    // 1~9까지의 3자리 수 판단
    const REGEXP = /^[1-9]{3}$/;
    if (!REGEXP.test(input)) {
      throw new Error(ERROR.INPUT_LENGTH);
    }
    // 서로 다른 수인지 판단
    if (new Set(input).size !== 3) {
      throw new Error(ERROR.UNIQUE_VALUE);
    }
  }

  resetNumberCheck(input) {
    if (!Object.values(RESET_OPTIONS).includes(input)) {
      throw new Error(ERROR.RESET);
    }
  }
}

export default ErrorHandler;
