import Lotto from './Lotto.js';

import MESSAGE from '../constants/message.js';

import throwError from '../utils/throwError.js';
import { isAlreadyExist, isNumber, isValidRange } from '../utils/validator.js';

class WinningLotto {
  #winningLotto;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateBonusNumber(bonusNumber, numbers);
    this.#winningLotto = new Lotto(numbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, numbers) {
    const { INVALID_NUMBER, INVALID_RANGE, ALREADY_EXISTS } = MESSAGE.errors;

    if (!isNumber(bonusNumber)) throwError(INVALID_NUMBER(bonusNumber));

    if (!isValidRange(bonusNumber)) throwError(INVALID_RANGE(bonusNumber));

    if (isAlreadyExist(bonusNumber, numbers))
      throwError(ALREADY_EXISTS(bonusNumber));
  }

  get DTO() {
    return {
      numbers: this.#winningLotto.getNumbers(),
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default WinningLotto;
