class ErrorMessages {
  constructor() {
    this.restartErrorMsg = "[ERROR] 1또는 2를 입력해주세요";
    this.ballLengthErrorMsg = "[ERROR] 3개의 숫자를 입력하셔야 합니다";
    this.ballTypeErrorMsg = "[ERROR] 숫자만 입력 할 수 있습니다";
    this.ballRangeErrorMsg = "[ERROR] 1~9 사이의 숫자만 입력하셔야 합니다";
    this.ballDuplicatedErrorMsg =
      "[ERROR] 중복된 숫자는 입력 할 수 없습니다";
  }
}

const ErrorMessage = new ErrorMessages();
export default ErrorMessage;
