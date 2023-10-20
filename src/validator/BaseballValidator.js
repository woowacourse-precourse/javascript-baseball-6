import { GAME_TERMS } from '../constants/gameTerms';
import { SYMBOLS } from '../constants/symbols';
import AppError from '../errors/AppError';
import CommonValidator from './CommonValidator';

class BaseballValidator {
  #baseball;

  #commonValidator;

  constructor(baseball) {
    this.#commonValidator = new CommonValidator(baseball);
    this.#baseball = baseball.split(SYMBOLS.emptyString).map(Number);
  }

  static from(baseball) {
    return new BaseballValidator(baseball);
  }

  static validationTypes = Object.freeze({
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

  validateBaseball() {
    this.#commonValidator.validate();
    Object.values(BaseballValidator.validationTypes).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#baseball)) throw new AppError(errorMessage);
    });
    return this.#baseball;
  }
}

export default BaseballValidator;
