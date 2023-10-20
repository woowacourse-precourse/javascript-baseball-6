import { SYMBOLS } from '../constants/symbols';
import AppError from '../errors/AppError';

class CommonValidator {
  #inputValue;

  constructor(inputValue) {
    this.#inputValue = inputValue;
  }

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

  validate() {
    Object.values(CommonValidator.validationTypes).forEach(({ errorMessage, isValid }) => {
      if (!isValid(this.#inputValue)) throw new AppError(errorMessage);
    });
  }
}

export default CommonValidator;
