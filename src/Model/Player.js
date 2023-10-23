import { CustomError } from './Error.js';
import { BASEBALL_NUMBER } from '../constants/gameConfig.js';
import { MESSAGE } from '../constants/message.js';
import { isBaseballNumber } from '../utils/validation.js';

export class Player {
  #numberList;

  constructor(numberList) {
    this.validateNumber(numberList);
    console.log(numberList, typeof numberList);

    this.#numberList = numberList;
  }

  validateNumber(numberList) {
    if (numberList.length !== BASEBALL_NUMBER.DIGIT)
      throw new CustomError(MESSAGE.ERROR.INVALID_DIGITS);

    if (!numberList.every(Number))
      throw new CustomError(MESSAGE.ERROR.INVALID_TYPE);

    if (!numberList.every(isBaseballNumber))
      throw new CustomError(MESSAGE.ERROR.OUT_OF_RANGE);
  }

  get _numberList() {
    return this.#numberList;
  }
}
