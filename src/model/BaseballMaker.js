import { pickRandomNumberInRange } from '../utils/random';

class BaseballMaker {
  static BASEBALL_SHAPE = Object.freeze({
    minNumber: 1,
    maxNumber: 9,
    size: 3,
  });

  #baseballShape;

  constructor() {
    this.#baseballShape = BaseballMaker.BASEBALL_SHAPE;
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
    const { minNumber, maxNumber } = this.#baseballShape;
    while (baseball.size < this.#baseballShape.size) {
      const baseballDigit = pickRandomNumberInRange(minNumber, maxNumber);
      baseball.add(baseballDigit);
    }
    return [...baseball];
  }
}

export default BaseballMaker;
