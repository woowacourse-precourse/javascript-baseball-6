// [ ] numbers의 # prefix를 변경할 수 없다.

import MESSAGE from '../constants/message.js';
import throwError from '../utils/throwError.js';
import { hasDuplicatedElements, hasSixNumbers } from '../utils/validator.js';

// [ ] Lotto에 필드를 추가할 수 없다.
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const { INVALID_NUMBERS_COUNT, DUPLICATED_NUMBERS } = MESSAGE.errors;

    if (!hasSixNumbers(numbers)) throwError(INVALID_NUMBERS_COUNT(numbers));

    if (hasDuplicatedElements(numbers)) throwError(DUPLICATED_NUMBERS(numbers));
  }

  // TODO: 추가 기능 구현
  // test용 getter
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
