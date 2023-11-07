import MESSAGE from '../constants/message.js';
import throwError from '../utils/throwError.js';
import {
  hasDuplicatedElements,
  hasSixNumbers,
  isNumbersInRange,
} from '../utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    const { INVALID_NUMBERS_COUNT, DUPLICATED_NUMBERS, INVALID_NUMBERS_RANGE } =
      MESSAGE.errors;

    if (!hasSixNumbers(numbers)) throwError(INVALID_NUMBERS_COUNT(numbers));

    if (hasDuplicatedElements(numbers)) throwError(DUPLICATED_NUMBERS(numbers));

    if (isNumbersInRange(numbers)) throwError(INVALID_NUMBERS_RANGE(numbers));
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
