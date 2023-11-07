import { WINNING_STANDARDS } from '../constants/winningStandards.js';
import { isEqual } from '../utils/object.js';

class Prize {
  #prizes;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, winningLotto) {
    this.#prizes = {};

    this.#lottos = lottos;
    this.#winningNumbers = winningLotto.numbers;
    this.#bonusNumber = winningLotto.bonusNumber;

    this.#initializePrizes();
  }

  get prizes() {
    return this.#prizes;
  }

  updatePrizes() {
    const results = this.getMatchCntResults();

    results.forEach((result) => {
      this.#checkWinningStandards(result);
    });
  }

  getMatchCntResults() {
    return this.#lottos.map((lotto) => ({
      matchCnt: this.#getMatchCnt(lotto),
      bonusMatch: this.#getBonusMatch(lotto),
    }));
  }

  #getMatchCnt(lotto) {
    const matchedNum = [...this.#winningNumbers].filter((num) =>
      lotto.includes(num)
    );
    return matchedNum.length;
  }

  #getBonusMatch(lotto) {
    return lotto.includes(this.#bonusNumber);
  }

  #checkWinningStandards(result) {
    for (const key in WINNING_STANDARDS) {
      const standard = WINNING_STANDARDS[key];

      if (isEqual(result, standard))
        this.#prizes[key] = (this.#prizes[key] || 0) + 1;
    }
  }

  #initializePrizes() {
    for (const key in WINNING_STANDARDS) {
      this.#prizes[key] = 0;
    }
  }
}

export default Prize;
