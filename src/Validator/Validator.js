class Validator {
  #RESTART = 1;

  #END = 2;

  #MAXIMUM_NUMBER_LENGTH = 3;

  #isAvailable = false;

  compareNumber(userNum) {
    this.checkUserGameValue(userNum);

    this.#isAvailable = true;

    return this.isCountAvailable();
  }

  checkUserGameValue(userNum) {
    const userNumArr = userNum.split('');

    Validator.hasValue(userNumArr);
    Validator.hasUniqueNumbers(+userNum);
    Validator.hasIsNaN(+userNum);
    Validator.hasDecimal(+userNum);
    Validator.hasMinusNum(+userNum);
    this.isNotNumberRange(userNumArr);
  }

  checkUserGameOptionValue(userNum) {
    if (userNum !== this.#RESTART && userNum !== this.#END) {
      throw new Error('[ERROR] 1 혹은 2를 입력해주세요');
    }

    return true;
  }

  isNotNumberRange(arr) {
    if (arr.length !== this.#MAXIMUM_NUMBER_LENGTH) {
      throw new Error('[ERROR] 3 자리 수를 입력해주세요');
    }
  }

  isCountAvailable() {
    return this.#isAvailable;
  }

  isvalidCount(count) {
    if (count === this.#MAXIMUM_NUMBER_LENGTH) {
      return count;
    }
    return true;
  }

  static hasUniqueNumbers(num) {
    const numArr = String(num).split('');
    if (!(numArr[0] !== numArr[1] && numArr[0] !== numArr[2] && numArr[1] !== numArr[2])) {
      throw new Error('[ERROR] 서로다른 3자리를 입력해주세요');
    }
  }

  static hasValue(numberArr) {
    if (numberArr.length === 0) throw new Error('[ERROR] 숫자를 입력해주세요');
  }

  static hasIsNaN(number) {
    if (Number.isNaN(number)) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
  }

  static hasDecimal(number) {
    if (String(number).includes('.')) throw new Error('[ERROR] 정수를 입력해주세요');
  }

  static hasMinusNum(number) {
    if (number < 0) throw new Error('[ERROR] 정수를 입력해주세요');
  }
}

export default Validator;
