import { ERROR_MESSAGE, RANDOM_NUMBERS_REG_EXP } from '../constants/index.js';

class User {
  /** @type {number[]|undefined} */
  #numbers;

  constructor(string) {
    this.#validateNumbers(string);
    this.#setNumbers(string);
  }
  #setNumbers(string) {
    this.#numbers = string.split('').map(v => Number(v));
  }
  /**
   * 서로 다른 숫자로 이루어 졌는지
   * @param {string} string
   * @returns {boolean}
   */
  #hasNoRepeatNumber(string) {
    return new Set(string.split('')).size === string.length;
  }
  /**
   * 1~9사이의 숫자 3개로 이루어졌는지를 검사
   * @param {string} string
   * @returns {boolean}
   */
  #isCorrectFormat(string) {
    return RANDOM_NUMBERS_REG_EXP.test(string);
  }

  #validateNumbers(string) {
    if (!this.#hasNoRepeatNumber(string) || !this.#isCorrectFormat(string))
      throw new Error(ERROR_MESSAGE.numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default User;
