import { Random } from '@woowacourse/mission-utils';
import { GAME_TERMS } from '../constants/gameTerms';

class BaseballMaker {
  #minValue;

  #maxValue;

  constructor() {
    this.#minValue = GAME_TERMS.BALL.MIN_VALUE;
    this.#maxValue = GAME_TERMS.BALL.MAX_VALUE;
  }

  static create() {
    return new BaseballMaker();
  }

  createBaseball() {
    const baseball = new Set();
    while (baseball.size < GAME_TERMS.BALL.DIGIT) {
      const baseballDigit = Random.pickNumberInRange(this.#minValue, this.#maxValue);
      baseball.add(baseballDigit);
    }
    return [...baseball];
  }
}

export default BaseballMaker;
