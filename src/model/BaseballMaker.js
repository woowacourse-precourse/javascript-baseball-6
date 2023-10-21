import { GAME_TERMS } from '../constants/gameTerms';
import { pickRandomNumberInRange } from '../utils/random';

/**
 * '야구공 생성'의 역할을 수행
 */
class BaseballMaker {
  /**
   * 야구공 내 존재하는 숫자의 최소 값
   * @private
   * @type {number}
   */
  #minNumber;

  /**
   * 야구공 내 존재하는 숫자의 최대 값
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
   * @returns {BaseballMaker} BaseballMaker의 인스턴스
   */
  static create() {
    return new BaseballMaker();
  }

  /**
   * 정해진 범위 내의 숫자들로 야구공을 생성하여 반환하는 메서드
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
