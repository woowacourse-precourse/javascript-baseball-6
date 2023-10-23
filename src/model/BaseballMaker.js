import { GAME_TERMS } from '../constants/gameTerms';
import { pickRandomNumberInRange } from '../utils/random';

class BaseballMaker {
  /**
   * @private
   * @type {number}
   */
  #minNumber;

  /**
   * @private
   * @type {number}
   */
  #maxNumber;

  constructor() {
    this.#minNumber = GAME_TERMS.baseball.minNumber;
    this.#maxNumber = GAME_TERMS.baseball.maxNumber;
  }

  /**
   * BaseballMaker 클래스의 정적 팩토리 메서드
   * @static
   * @public
   * @returns {BaseballMaker} BaseballMaker의 인스턴스
   */
  static create() {
    return new BaseballMaker();
  }

  /**
   * @public
   * @returns {number[]} 야구공
   */
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
