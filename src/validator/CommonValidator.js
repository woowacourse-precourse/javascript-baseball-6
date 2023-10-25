import { SYMBOLS } from '../constants/symbols.js';
import AppError from '../errors/AppError.js';

class CommonValidator {
  /**
   * @private
   * @type {string}
   */
  #inputValue;

  constructor(inputValue) {
    this.#inputValue = inputValue;
  }

  /**
   * @static
   * @public
   * @constant
   * @type {import('../utils/jsDoc.js').CommonValidationTypes}
   */
  static VALIDATION_TYPES = Object.freeze({
    emptyValues: Object.freeze({
      errorMessage: '아무것도 입력하지 않았으므로 다시 입력해주세요.',
      isValid(inputValue) {
        return inputValue !== SYMBOLS.emptyString;
      },
    }),
    existSpaces: Object.freeze({
      errorMessage: '입력한 값에 공백이 존재합니다.',
      isValid(inputValue) {
        return !inputValue.includes(SYMBOLS.space);
      },
    }),
  });

  /**
   * @public
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  validate() {
    Object.values(CommonValidator.VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#inputValue)) throw new AppError(errorMessage);
    });
  }
}

export default CommonValidator;
