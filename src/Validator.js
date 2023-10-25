import { Random, Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = {
  POSITIVE_NUMBER: '[ERROR] 1에서 9로 이루어진 숫자를 입력해 주세요.',
  LENGTH: '[ERROR] 세 자리 숫자를 입력해 주세요.',
  DOUBLE: '[ERROR] 중복된 숫자가 입력했습니다.',
  END_OPTION: '[ERROR] 1 또는 2를 입력해 주세요.',
};

class Validator {
  static #checkIsPositiveNumber(number) {
    const pattern = /^[1-9]+$/;
    const numbers = number.split('').map(Number);
    const isChecked = numbers.every((number) => pattern.test(number));

    return isChecked;
  }

  static #checkLength(number) {
    return number.length == 3;
  }

  static #checkDouble(number) {
    const set = new Set(number);
    return set.size === number.length;
  }

  static checkValidation(number) {
    if (!this.#checkIsPositiveNumber(number)) {
      throw new Error(ERROR_MESSAGE.POSITIVE_NUMBER);
    }
    if (!this.#checkLength(number)) {
      throw new Error(ERROR_MESSAGE.LENGTH);
    }
    if (!this.#checkDouble(number)) {
      throw new Error(ERROR_MESSAGE.DOUBLE);
    }
    return true;
  }

  static #checkEndOption(endOption) {
    const pattern = /^[12]+$/;
    return pattern.test(endOption);
  }

  static checkEndOptionValidation(endOption) {
    if (!this.#checkEndOption(endOption)) {
      throw new Error(ERROR_MESSAGE.END_OPTION);
    }
    return endOption;
  }
}

export default Validator;
