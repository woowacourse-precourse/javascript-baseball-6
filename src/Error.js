class ErrorValidate {
  static isHasZero(inputValue) {
    //0 이 있는지
    const numArr = inputValue.split("");
    return numArr.some((num) => num === 0);
  }

  static isDuplicate(inputValue) {
    //중복 숫자가 있는지
    const numArr = inputValue.split("");
    return numArr.some((x) => numArr.indexOf(x) !== numArr.lastIndexOf(x));
  }

  static isNotInteger(inputValue) {
    if (inputValue % 1 !== 0) {
      //소수점 판별
      return true;
    }

    if (inputValue < 0) {
      //음수 판별
      return true;
    }

    if (typeof inputValue !== "number") {
      //넘버 판별
      return true;
    }

    return false;
  }
}

export default ErrorValidate;
