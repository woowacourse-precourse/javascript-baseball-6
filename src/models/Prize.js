import { WINNING_STANDARDS } from '../constants/winningStandards';

class Prize {
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, winningLotto) {
    this.#lottos = lottos;
    this.#winningNumbers = winningLotto.numbers;
    this.#bonusNumber = winningLotto.bonusNumber;
  }

  getResult() {
    const result = this.#lottos.map((lotto) => {
      matchCnt: this.#getMatchCnt(lotto);
      bonusMatch: this.#getBonusMatch();
    });

    return result;
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

  getTotalPrize() {
    const result = this.getResult();

    for (key in WINNING_STANDARDS) {
    }
  }
}

export default Prize;
