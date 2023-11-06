import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import throwError from '../utils/throwError.js';
import { isNumber, isValidCost } from '../utils/validator.js';
import MESSAGE from '../constants/message.js';
import { CONSTANTS } from '../constants/constants.js';

class LottoMachine {
  #lottos;
  #issueCnt;

  constructor(cost) {
    this.#validate(cost);
    this.#issueCnt = Number(cost) / 1000;
    this.#lottos = [];
  }

  #validate(cost) {
    const { INVALID_NUMBER, INVALID_COST } = MESSAGE.errors;

    if (!isNumber(cost)) throwError(INVALID_NUMBER(cost));

    if (!isValidCost(cost)) throwError(INVALID_COST(cost));
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
