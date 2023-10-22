import { CustomError } from './Error';

export class Player {
  #number;

  constructor(number) {
    this.validateNumber(number);

    this.#number = number;
  }

  validateNumber(number) {
    if (String(number).length === BASEBALL_NUMBER.DIGIT)
      throw new CustomError(MESSAGE.ERROR.INVALID_DIGITS);
  }
}
