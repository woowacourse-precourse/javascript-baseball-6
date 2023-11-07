import MESSAGE from '../constants/message.js';
import throwError from '../utils/throwError.js';
import { hasDuplicatedElements, hasSixNumbers } from '../utils/validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    const { INVALID_NUMBERS_COUNT, DUPLICATED_NUMBERS } = MESSAGE.errors;

    if (!hasSixNumbers(numbers)) throwError(INVALID_NUMBERS_COUNT(numbers));

    if (hasDuplicatedElements(numbers)) throwError(DUPLICATED_NUMBERS(numbers));
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
