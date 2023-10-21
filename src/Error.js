class ErrorHandler {
  baseballNumberCheck(userInput) {
    const isNotNumber = /[^1-9]/;

    if (isNotNumber.test(userInput)) {
      throw new Error('1부터 9까지의 숫자만 입력하세요.');
    }
    if (userInput.length !== 3) {
      throw new Error('3자리의 숫자만 입력하세요.');
    }
    if (new Set(userInput).size !== 3) {
      throw new Error('중복이 없는 3자리의 숫자만 입력하세요.');
    }
  }

  resetNumberCheck(userInput) {
    const resetOptions = ['1', '2'];

    if (!resetOptions.includes(userInput)) {
      throw new Error('1 또는 2 중 하나의 숫자를 입력해야합니다.');
    }
  }
}

export default ErrorHandler;