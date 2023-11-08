import { WINNING_STANDARDS } from '../constants/winningStandards.js';
import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';

class Prize {
  #prizes;
  #lottos;
  #winningLotto;

  /**
   * @param {Lotto[]} lottos
   * @param {WinningLotto} winningLotto
   */
  constructor(lottos, winningLotto) {
    this.#prizes = {};

    this.#lottos = lottos;
    this.#winningLotto = winningLotto;

    this.#initializePrizes();
  }

  get prizes() {
    return this.#prizes;
  }

  updatePrizes() {
    this.#lottos.forEach((lotto) => {
      const result = this.#winningLotto.getRankOfLotto(lotto.getNumbers());

      if (result) {
        this.#prizes[result] = (this.#prizes[result] || 0) + 1;
      }
    });
  }

  #initializePrizes() {
    for (const key in WINNING_STANDARDS) {
      this.#prizes[key] = 0;
    }
  }
}

export default Prize;
