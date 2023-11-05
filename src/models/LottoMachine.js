import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import throwError from '../utils/throwError';
import { isNumber, isValidCost } from '../utils/validator';

class LottoMachine {
  #lottos;
  #issueCnt;

  constructor(cost) {
    this.#validate(cost);
    this.#issueCnt = cost / 1000;
    this.#lottos = [];
  }

  #validate(cost) {
    if (!isNumber(cost)) throwError('숫자만 입력 가능합니다.');

    if (!isValidCost(cost)) throwError('구매는 1000원 단위로만 가능합니다.');
  }

  get lottos() {
    return this.#lottos;
  }

  get isIssueOver() {
    return this.#lottos.length === this.#issueCnt;
  }

  get DTO() {
    return {
      issueCnt: this.#issueCnt,
      lottos: this.#lottos.map((lotto) => lotto.numbers),
    };
  }

  async issueLotto() {
    const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(lottoNum);

    await this.#lottos.push(lotto);
  }
}

export default LottoMachine;
