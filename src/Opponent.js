import { MissionUtils } from '@woowacourse/mission-utils';

class Opponent {
  #opponentNumber;

  constructor() {
    this.#opponentNumber = this.generateNumber();
  }

  generateNumber() {
    const result = [];
    while (result.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!result.includes(number)) {
        result.push(number);
      }
    }

    return result;
  }

  get opponentNumber() {
    return this.#opponentNumber;
  }
}
export default Opponent;
