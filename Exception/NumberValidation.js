import { ERROR, NUMBER } from '../core/Constants';

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
    return this.#inputValue.length === NUMBER.THREE;
  }

  changeStrToNum() {
    return Number(this.#inputValue);
  }
}

export default NumberValidation;
