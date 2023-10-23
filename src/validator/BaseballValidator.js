import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

/**
 * '야구공 유효성 검사'의 역할을 수행
 */
class BaseballValidator {
  /**
   * 검사할 야구공
   * @private
   * @type {number[]}
   */
  #baseball;

  /**
   * 일반적인 검사를 수행할 Validator
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
   * @param {string} baseball - 검사할 야구공 문자열
   * @returns {BaseballValidator} BaseballValidator의 인스턴스
   */
  static from(baseball) {
    return new BaseballValidator(baseball);
  }

  /**
   * 야구공 검사 유형에 대한 에러 메시지와 유효성 검사 함수를 정의한 객체
   * @static
   * @type {Object}
   * @property {Object} availableNumber - 야구공의 숫자 여부를 검사하기 위한 객체
   * @property {Object} availableNumberRange - 야구공의 게임 규칙에 명시된 숫자 범위를 가지고 있는지 있는지 검사하기 위한 객체
   * @property {Object} availableNumberDigit - 야구공의 게임 규칙에 명시된 자릿수를 가지고 있는지 검사하기 위한 객체
   * @property {Object} existDuplicateNumber - 야구공의 중복된 숫자 존재 여부를 검사하기 위한 객체
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
   * 제공된 야구공에 대해 유효성 검사를 수행하는 메서드
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
