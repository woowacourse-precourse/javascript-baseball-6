import { MissionUtils } from '@woowacourse/mission-utils';

class Refree {
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

  judgeBallOrStrike(playerNumber) {
    const ball = this.countBall(playerNumber);
    const strike = this.countStrike(playerNumber);

    return { ball, strike };
  }

  countBall(playerNumber) {
    return playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] !== target
        ? count + 1
        : count;
    }, 0);
  }

  countStrike(playerNumber) {
    return playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] === target
        ? count + 1
        : count;
    }, 0);
  }
}
export default Refree;
