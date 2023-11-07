import MESSAGE from '../constants/message.js';
import throwError from '../utils/throwError.js';
import { isNumber, isValidRange } from '../utils/validator.js';
import Lotto from './Lotto.js';

class WinningLotto {
  #winningLotto;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateBonusNumber(bonusNumber);
    this.#winningLotto = new Lotto(numbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    const { INVALID_NUMBER, INVALID_RANGE } = MESSAGE.errors;

    if (!isNumber(bonusNumber)) throwError(INVALID_NUMBER(bonusNumber));

    if (!isValidRange(bonusNumber)) throwError(INVALID_RANGE(bonusNumber));
  }

  get DTO() {
    return {
      numbers: this.#winningLotto.getNumbers(),
      bonusNumber: this.#bonusNumber,
    };
  }
}

export default WinningLotto;
