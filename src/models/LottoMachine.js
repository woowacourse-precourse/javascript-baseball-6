import { Random } from '@woowacourse/mission-utils';

// models
import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';
import Prize from './Prize.js';
import Statistics from './Statistics.js';

// constants
import CONSTANTS from '../constants/constants.js';
import MESSAGE from '../constants/message.js';

// utils
import throwError from '../utils/throwError.js';
import { isNumber, isValidCost } from '../utils/validator.js';

class LottoMachine {
  constructor(cost) {
    this.#validate(cost);

    this.issueCnt = cost / CONSTANTS.COST_PER_GAME;
    this.lottos = [];

    this.winningLotto;
    this.prize;
    this.statistics;
  }

  #validate(cost) {
    const { INVALID_NUMBER, INVALID_COST } = MESSAGE.errors;

    if (!isNumber(cost)) throwError(INVALID_NUMBER(cost));

    if (!isValidCost(cost)) throwError(INVALID_COST(cost));
  }

  get purchaseDTO() {
    return {
      issueCnt: this.issueCnt,
      lottos: this.lottos.map((lotto) => lotto.getNumbers()),
    };
  }

  // 로또 발행
  isIssueOver() {
    return this.lottos.length === this.issueCnt;
  }

  issueLotto() {
    while (!this.isIssueOver()) {
      const lottoNum = Random.pickUniqueNumbersInRange(
        CONSTANTS.MIN_NUMBER,
        CONSTANTS.MAX_NUMBER,
        CONSTANTS.DRAW_SIZE
      );

      const lotto = new Lotto(lottoNum);
      this.lottos.push(lotto);
    }
  }

  // 당첨 로또 발행
  issueWinningLotto(winningNumbers, bonusNumber) {
    this.winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  // 당첨 결과
  async getResults() {
    await this.calculatePrizeResult();

    const statistics = await new Statistics(this.issueCnt, this.prize.prizes);

    return {
      earningsRate: await statistics.getPriceEarningsRatio(),
      fullResults: this.prize.prizes,
    };
  }

  async calculatePrizeResult() {
    this.prize = new Prize(this.lottos, this.winningLotto);

    await this.prize.updatePrizes();
  }
}

export default LottoMachine;
