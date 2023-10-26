import { SYMBOLS } from '../constants/symbols.js';
import AppError from '../errors/AppError.js';
import { BaseballMaker } from '../model/index.js';
import CommonValidator from './CommonValidator.js';

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
      errorMessage: `입력한 숫자는 ${BaseballMaker.BASEBALL_SHAPE.minNumber}~${BaseballMaker.BASEBALL_SHAPE.maxNumber}의 범위를 가져야 합니다.`,
      isValid(baseball) {
        const { minNumber, maxNumber } = BaseballMaker.BASEBALL_SHAPE;
        return baseball.every((ballNumber) => ballNumber >= minNumber && ballNumber <= maxNumber);
      },
    }),
    availableSize: Object.freeze({
      errorMessage: `숫자는 ${BaseballMaker.BASEBALL_SHAPE.size}자리만 가능합니다.`,
      isValid(baseball) {
        return baseball.length === BaseballMaker.BASEBALL_SHAPE.size;
      },
    }),
    existDuplicateNumber: Object.freeze({
      errorMessage: '입력한 숫자에 중복된 값이 존재합니다.',
      isValid(baseball) {
        return new Set(baseball).size === BaseballMaker.BASEBALL_SHAPE.size;
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
