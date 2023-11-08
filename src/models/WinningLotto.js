import Lotto from './Lotto.js';

import MESSAGE from '../constants/message.js';

import throwError from '../utils/throwError.js';
import { isAlreadyExist, isNumber, isValidRange } from '../utils/validator.js';
import { WINNING_STANDARDS } from '../constants/winningStandards.js';
import { isEqual } from '../utils/object.js';

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

  /**
   * 검사할 로또 번호를 인자로 받아 당첨 여부를 검사하여 등수를 반환
   * @param {number[]} numbers
   */
  getRankOfLotto(numbers) {
    const result = {
      matchCnt: this.#getMatchCnt(numbers),
      bonusMatch: this.#getBonusMatch(numbers),
    };
    const rank = this.getRankFromWinningStandard(result);

    return rank;
  }

  getRankFromWinningStandard(matchedInfo) {
    for (const key in WINNING_STANDARDS) {
      const standard = WINNING_STANDARDS[key];

      if (isEqual(matchedInfo, standard)) {
        return key;
      }
    }
    return;
  }

  #getMatchCnt(numbers) {
    const matchedNum = [...this.#winningLotto.getNumbers()].filter((num) =>
      numbers.includes(num)
    );
    return matchedNum.length;
  }

  #getBonusMatch(numbers) {
    return numbers.includes(this.#bonusNumber);
  }
}

export default WinningLotto;
