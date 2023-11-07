import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { CONSTANTS } from '../constants/constants.js';
import MESSAGE from '../constants/message.js';
import { isNumber, isValidCost } from '../utils/validator.js';
import throwError from '../utils/throwError.js';
import WinningLotto from './WinningLotto.js';

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

  issueWinningLotto(winningNumbers, bonusNumber) {
    this.winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoMachine;
