import { MissionUtils } from '@woowacourse/mission-utils';

class Utils {
  static #ERROR_MESSAGE = {
    NOT_TYPE_NUMBER: '[ERROR] : Min, Max, Count는 숫자여야 합니다.',
    NOT_SAFE_NUMBER: '[ERROR] : Min, Max는 안전한 숫자여야 합니다.',
    NOT_SAFE_COUNT: '[ERROR] : Count는 1이상의 안전한 숫자여야 합니다.',
    MIN_MAX: '[ERROR] : 최소값이 최대값보다 큽니다.',
    COUNT: '[ERROR] : 최대값과 최소값의 차이보다 뽑을 갯수가 많습니다.',
  };

  static getUniqueRandomNumbersInRange(min, max, count) {
    Utils.validateGetNumbersRange(min, max, count);

    const numbers = [];
    while (numbers.length < count) {
      const number = MissionUtils.Random.pickNumberInRange(min, max);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  static #isNumber(input) {
    return typeof input === 'number';
  }

  static validateGetNumbersRange(min, max, count) {
    if (
      !Utils.#isNumber(min) ||
      !Utils.#isNumber(max) ||
      !Utils.#isNumber(count)
    ) {
      throw new Error(Utils.#ERROR_MESSAGE.NOT_TYPE_NUMBER);
    }

    if (min < Number.MIN_SAFE_INTEGER || max > Number.MAX_SAFE_INTEGER) {
      throw new Error(Utils.#ERROR_MESSAGE.NOT_SAFE_NUMBER);
    }

    if (count < 1 || count > Number.MAX_SAFE_INTEGER) {
      throw new Error(Utils.#ERROR_MESSAGE.NOT_SAFE_COUNT);
    }

    if (min > max) {
      throw new Error(Utils.#ERROR_MESSAGE.MIN_MAX);
    }

    if (max - min + 1 < count) {
      throw new Error(Utils.#ERROR_MESSAGE.COUNT);
    }
  }
}

export default Utils;
