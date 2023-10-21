import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';


class Feedback {

  /** @type {string} */
  _feedback = null;

  /** @type {number} */
  _balls = null;

  /** @type {number} */
  _strikes = null;

  /**
   * 객체 생성 시, 피드백을 생성한다.
   * @param {number} balls 
   * @param {number} strikes 
   */
  constructor(balls, strikes) {
    this._balls = balls;
    this._strikes = strikes;
    this._makeFeedback();
  }

  /**
   * 피드백을 생성한다.
   * - 낫싱
   * - ${balls}볼
   * - ${strikes}스트라이크
   * - ${balls}볼 ${strikes}스트라이크
   */
  _makeFeedback() {
    let string = ''
    if (this._balls) string += this._balls + Strings.BALL + Strings.SPACE;
    if (this._strikes) string += this._strikes + Strings.STRIKE;
    if (!string) string += Strings.NOTHING
    this._feedback = string;
  }

  /**
   * 피드백을 출력한다.
   */
  print() {
    Console.print(this._feedback);
  }

  /**
   * strikes를 반환한다.
   * @returns {number}
   */
  getStrikes() {
    return this._strikes;
  }
}

export default Feedback;
