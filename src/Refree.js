import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_NUMBER_LENGTH } from './util/constants.js';

const RANDOM_NUMBER_MINIMUM = 1;
const RANDOM_NUMBER_MAXIMUM = 9;
const DEFAULT_COUNT_BALL = 0;
const DEFAULT_COUNT_STRIKE = 0;

class Refree {
  #opponentNumber;

  constructor() {
    this.#opponentNumber = this.#generateNumber();
  }

  #generateNumber() {
    const result = [];
    while (result.length < GAME_NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(
        RANDOM_NUMBER_MINIMUM,
        RANDOM_NUMBER_MAXIMUM
      );
      if (!result.includes(number)) result.push(number);
    }

    return result;
  }

  judgeBallOrStrike(playerNumber) {
    const ball = this.#countBall(playerNumber);
    const strike = this.#countStrike(playerNumber);

    return { ball, strike };
  }

  #countBall(playerNumber) {
    return playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] !== target
        ? count + 1
        : count;
    }, DEFAULT_COUNT_BALL);
  }

  #countStrike(playerNumber) {
    return playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] === target
        ? count + 1
        : count;
    }, DEFAULT_COUNT_STRIKE);
  }
}
export default Refree;
