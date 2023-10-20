import { MissionUtils } from '@woowacourse/mission-utils';

class Opponent {
  #computerNumbers = [];

  makeRandomNumber() {
    while (this.#computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#computerNumbers.includes(number)) {
        this.#computerNumbers.push(number);
      }
    }
    return this.#computerNumbers;
  }
}

export default Opponent;
