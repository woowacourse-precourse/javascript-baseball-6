import CONSTANTS from '../constants/constants.js';
import { PRIZE } from '../constants/winningStandards.js';

class Statistics {
  #issueCnt;
  #results;

  constructor(issueCnt, results) {
    this.#issueCnt = issueCnt;
    this.#results = results;
  }

  getPriceEarningsRatio() {
    const price = this.#issueCnt * CONSTANTS.COST_PER_GAME;

    let earnings = 0;
    for (const key in this.#results) {
      earnings += this.#results[key] * PRIZE[key];
    }

    if (earnings === 0) {
      return 0;
    }
    console.log(earnings);
    return ((earnings / price) * 100).toFixed(1);
  }
}

export default Statistics;
