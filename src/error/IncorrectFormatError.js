import BasicError from "./BasicError.js";

class IncorrectFormatError extends BasicError {
  constructor() {
    super("숫자가 잘못된 형식입니다.");
  }
}

export default IncorrectFormatError;
