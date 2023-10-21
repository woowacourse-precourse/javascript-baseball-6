import { SYMBOLS } from '../constants/symbols';
import AppError from '../errors/AppError';

/**
 * '일반적인 입력값 유효성 검사'의 역할을 수행
 */
class CommonValidator {
  /**
   * 유효성 검사를 수행할 입력값
   * @private
   * @type {string}
   */
  #inputValue;

  constructor(inputValue) {
    this.#inputValue = inputValue;
  }

  /**
   * 일반적인 유효성 검사 유형에 대한 에러 메시지와 유효성 검사 함수를 정의한 객체
   * @static
   * @type {Object}
   * @property {Object} emptyValues - 입력값이 비어있는지 검사하기 위한 객체
   * @property {Object} existSpaces - 입력값 내에 공백이 존재하는지 검사하기 위한 객체
   */
  static validationTypes = Object.freeze({
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
   * 제공된 입력값에 대해 유효성 검사를 수행하는 메서드
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  validate() {
    Object.values(CommonValidator.validationTypes).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#inputValue)) throw new AppError(errorMessage);
    });
  }
}

export default CommonValidator;
