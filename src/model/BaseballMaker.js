import { GAME_TERMS } from '../constants/gameTerms';
import { pickRandomNumberInRange } from '../utils/random';

class BaseballMaker {
  #minNumber;

  #maxNumber;

  constructor() {
    this.#minNumber = GAME_TERMS.baseball.minNumber;
    this.#maxNumber = GAME_TERMS.baseball.maxNumber;
  }

  static create() {
    return new BaseballMaker();
  }

  createBaseball() {
    const baseball = new Set();
    while (baseball.size < GAME_TERMS.baseball.digit) {
      const baseballDigit = pickRandomNumberInRange(this.#minNumber, this.#maxNumber);
      baseball.add(baseballDigit);
    }
    return [...baseball];
  }
}

export default BaseballMaker;
