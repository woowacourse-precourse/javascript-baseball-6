import { ERROR } from '../core/Constants';

import ErrorCase from './ErrorCase';

class NumberValidation extends ErrorCase {
  #inputValue;
  constructor(value) {
    super();
    this.#inputValue = value;
  }

  checkAllException() {
    if (!(this.checkLength() && this.checkInteger())) {
      throw ERROR.INVALID_NUMBER;
    }
  }

  checkInteger() {
    return Number.isInteger(this.changeStrToNum());
  }

  checkLength() {
    return this.#inputValue.length === 3;
  }

  changeStrToNum() {
    return Number(this.#inputValue);
  }
}

export default NumberValidation;
