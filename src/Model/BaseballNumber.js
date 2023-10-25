import { BaseballNumberError } from '../Model/Error.js';
import { BASEBALL_NUMBER } from '../constants/baseballGame.js';
import { ERROR } from '../constants/error.js';
import { TYPE } from '../constants/type.js';

export class BaseballNumber {
  #numberList;

  constructor(numberList) {
    const normalizedInput = this.#normalizeInput(numberList);

    this.#validation(normalizedInput);

    this.#numberList = normalizedInput.map(Number);
  }

  #normalizeInput(input) {
    if (typeof input === TYPE.NUMBER) return String(input).split('');
    if (typeof input === TYPE.STRING) return input.split('');
    if (Array.isArray(input)) return input;

    throw new BaseballNumberError(ERROR.MESSAGE.INVALID_BASEBALL_NUMBER_TYPE);
  }

  #validation(numberList) {
    if (numberList.length !== BASEBALL_NUMBER.DIGIT)
      throw new BaseballNumberError(`${ERROR.MESSAGE.INVALID_DIGITS}`);

    if (new Set(numberList).size !== numberList.length)
      throw new BaseballNumberError(ERROR.MESSAGE.DUPLICATE_NUMBERS);

    if (!numberList.every(Number))
      throw new BaseballNumberError(ERROR.MESSAGE.NOT_A_NUMBER);

    if (!numberList.every(isBaseballNumber))
      throw new BaseballNumberError(ERROR.MESSAGE.OUT_OF_RANGE);
  }

  get _numberList() {
    return this.#numberList;
  }
}

export const isBaseballNumber = (number) =>
  number <= BASEBALL_NUMBER.MAX && number >= BASEBALL_NUMBER.MIN;
