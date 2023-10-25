import { BaseballNumberError } from '../Model/Error.js';
import { BASEBALL_NUMBER } from '../constants/baseballGame.js';
import { ERROR } from '../constants/error.js';

export class BaseballNumber {
  #numberList;

  constructor(numberList) {
    if (typeof numberList === 'string') numberList = numberList.split('');

    this.#validation(numberList);

    this.#numberList = numberList.map(Number);
  }

  #validation(numberList) {
    if (numberList.length !== BASEBALL_NUMBER.DIGIT)
      throw new BaseballNumberError(ERROR.MESSAGE.INVALID_DIGITS);

    if (new Set(numberList).size !== numberList.length)
      throw new BaseballNumberError(ERROR.MESSAGE.DUPLICATE_NUMBERS);

    if (!numberList.every(Number))
      throw new BaseballNumberError(ERROR.MESSAGE.INVALID_TYPE);

    if (!numberList.every(isBaseballNumber))
      throw new BaseballNumberError(ERROR.MESSAGE.OUT_OF_RANGE);
  }

  get _numberList() {
    return this.#numberList;
  }
}

export const isBaseballNumber = (number) =>
  number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;
