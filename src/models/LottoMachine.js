import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';
import WinningLotto from './WinningLotto.js';

import CONSTANTS from '../constants/constants.js';
import MESSAGE from '../constants/message.js';

import throwError from '../utils/throwError.js';
import { isNumber, isValidCost } from '../utils/validator.js';
import Prize from './Prize.js';
import Statistics from './Statistics.js';

class LottoMachine {
  constructor(cost) {
    this.#validate(cost);

    this.issueCnt = Number(cost) / 1000;
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

  // 로또 발행 관련
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

  // 당첨 결과 계산
  async getResults() {
    await this.calculatePrizeResult();

    const statistics = await new Statistics(this.issueCnt, this.prize.prizes);

    return {
      earningsRate: await statistics.getPriceEarningsRatio(),
      fullResults: this.prize.prizes,
    };
  }

  async calculatePrizeResult() {
    const lottos = this.lottos.map((lotto) => lotto.getNumbers());
    const winningLotto = this.winningLotto.DTO;

    this.prize = new Prize(lottos, winningLotto);

    await this.prize.updatePrizes();
  }
}

export default LottoMachine;
