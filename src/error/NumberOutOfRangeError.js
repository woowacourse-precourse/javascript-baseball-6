import BasicError from "./BasicError.js";

class NumberOutOfRangeError extends BasicError {
  constructor(num) {
    super(`${num}이하의 숫자를 입력해 주세요.`);
  }
}

export default NumberOutOfRangeError;
