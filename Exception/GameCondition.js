import { ERROR, NUMBER } from '../core/Constants';

import ErrorCase from './ErrorCase';

class GameCondition extends ErrorCase {
  #inputValue;
  constructor(value) {
    super();
    this.#inputValue = value;
  }

  checkAllException() {
    if (!(this.checkOneOrTwo() && this.checkLength())) {
      throw ERROR.INVALID_NUMBER;
    }
  }

  checkOneOrTwo() {
    return (
      this.changeTypeForNum() === NUMBER.ONE ||
      this.changeTypeForNum() === NUMBER.TWO
    );
  }

  checkLength() {
    return this.#inputValue.length === NUMBER.ONE;
  }

  changeTypeForNum() {
    return Number(this.#inputValue);
  }
}

export default GameCondition;
