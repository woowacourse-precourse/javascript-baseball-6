import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import throwError from '../utils/throwError';
import { isNumber, isValidCost } from '../utils/validator';
import MESSAGE from '../constants/message';
import { CONSTANTS } from '../constants/constants';

class LottoMachine {
  #lottos;
  #issueCnt;

  constructor(cost) {
    this.#validate(cost);
    this.#issueCnt = cost / 1000;
    this.#lottos = [];
  }

  #validate(cost) {
    const { INVALID_NUMBER, INVALID_COST } = MESSAGE.errors;

    if (!isNumber(cost)) throwError(INVALID_NUMBER);

    if (!isValidCost(cost)) throwError(INVALID_COST);
  }

  get DTO() {
    return {
      issueCnt: this.#issueCnt,
      lottos: this.#lottos.map((lotto) => lotto.getNumbers()),
    };
  }

  get lottos() {
    return this.#lottos;
  }

  isIssueOver() {
    return this.#lottos.length === this.#issueCnt;
  }

  issueLotto() {
    const lottoNum = Random.pickUniqueNumbersInRange(
      CONSTANTS.MIN_NUMBER,
      CONSTANTS.MAX_NUMBER,
      CONSTANTS.DRAW_SIZE
    );

    const lotto = new Lotto(lottoNum);

    this.#lottos.push(lotto);
  }

  checkWinningNumbers(numbers, bonusNumber) {}
}

export default LottoMachine;
