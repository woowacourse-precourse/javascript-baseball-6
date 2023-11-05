import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import throwError from '../utils/throwError';

class LottoMachine {
  #lottos;
  #issueCnt;

  constructor(cost) {
    const costNum = Number(cost);

    this.#validate(costNum);
    this.#issueCnt = costNum / 1000;
    this.#lottos = [];
  }

  #validate(cost) {
    if (isNaN(cost)) throwError('숫자만 입력 가능합니다.');
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
