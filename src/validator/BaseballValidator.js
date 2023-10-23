import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

class BaseballValidator {
  /**
   * @private
   * @type {number[]}
   */
  #baseball;

  /**
   * @private
   * @type {CommonValidator}
   */
  #commonValidator;

  constructor(baseball) {
    this.#commonValidator = new CommonValidator(baseball);
    this.#baseball = baseball.split(SYMBOLS.emptyString).map(Number);
  }

  /**
   * BaseballValidator 클래스의 정적 팩토리 메서드
   * @static
   * @public
   * @param {string} baseball - 검사할 야구공 문자열
   * @returns {BaseballValidator} BaseballValidator의 인스턴스
   */
  static from(baseball) {
    return new BaseballValidator(baseball);
  }

  /**
   * @static
   * @public
   * @constant
   * @type {import('../utils/jsDoc.js').BaseballValidationTypes}
   */
  static VALIDATION_TYPES = Object.freeze({
    availableNumber: Object.freeze({
      errorMessage: '숫자만 입력이 가능합니다.',
      isValid(baseball) {
        return baseball.every((ballNumber) => !Number.isNaN(ballNumber));
      },
    }),
    availableNumberRange: Object.freeze({
      errorMessage: `입력한 숫자는 ${GAME_TERMS.baseball.minNumber}~${GAME_TERMS.baseball.maxNumber}의 범위를 가져야 합니다.`,
      isValid(baseball) {
        return baseball.every(
          (ballNumber) =>
            ballNumber >= GAME_TERMS.baseball.minNumber &&
            ballNumber <= GAME_TERMS.baseball.maxNumber,
        );
      },
    }),
    availableDigit: Object.freeze({
      errorMessage: `숫자는 ${GAME_TERMS.baseball.digit}자리만 가능합니다.`,
      isValid(baseball) {
        return baseball.length === GAME_TERMS.baseball.digit;
      },
    }),
    existDuplicateNumber: Object.freeze({
      errorMessage: '입력한 숫자에 중복된 값이 존재합니다.',
      isValid(baseball) {
        return new Set(baseball).size === GAME_TERMS.baseball.digit;
      },
    }),
  });

  /**
   * @public
   * @throws {AppError} 유효성을 만족하지 않을 경우 에러 발생
   * @returns {void}
   */
  validateBaseball() {
    this.#commonValidator.validate();
    Object.values(BaseballValidator.VALIDATION_TYPES).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#baseball)) throw new AppError(errorMessage);
    });
  }
}

export default BaseballValidator;
