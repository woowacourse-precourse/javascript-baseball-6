import { CustomError } from '../Model/Error.js';
import { BASEBALL_NUMBER } from '../constants/baseballGame.js';
import { MESSAGE } from '../constants/message.js';

export class BaseballNumber {
  #numberList;

  constructor(numberList) {
    if (typeof numberList === 'string') numberList = numberList.split('');

    this.#validation(numberList);

    this.#numberList = numberList.map(Number);
  }

  #validation(numberList) {
    if (numberList.length !== BASEBALL_NUMBER.DIGIT)
      throw new CustomError(MESSAGE.ERROR.INVALID_DIGITS);

    if (new Set(numberList).size !== numberList.length)
      throw new CustomError(MESSAGE.ERROR.DUPLICATE_NUMBERS);

    if (!numberList.every(Number))
      throw new CustomError(MESSAGE.ERROR.INVALID_TYPE);

    if (!numberList.every(isBaseballNumber))
      throw new CustomError(MESSAGE.ERROR.OUT_OF_RANGE);
  }

  get _numberList() {
    return this.#numberList;
  }
}

export const isBaseballNumber = (number) =>
  number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;
