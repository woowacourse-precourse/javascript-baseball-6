import { PRIZE, WINNING_STANDARDS } from '../constants/winningStandards';
import { isEqual } from '../utils/object';

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

  #initializePrizes() {
    for (const key in WINNING_STANDARDS) {
      this.#prizes[key] = 0;
    }
  }

  getTotalPrizeMoney() {}

  updatePrizes() {
    const results = this.getResults();

    results.forEach((result) => {
      this.calculatePrizes(result);
    });
  }

  calculatePrizes(result) {
    for (const key in WINNING_STANDARDS) {
      const standard = WINNING_STANDARDS[key];

      if (isEqual(result, standard))
        this.#prizes[key] = (this.#prizes[key] || 0) + 1;
    }
  }

  getResults() {
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
}

export default Prize;
