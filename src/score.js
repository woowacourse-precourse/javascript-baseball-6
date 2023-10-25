import { MAX_INPUT_SIZE } from './constants';

class Score {
  constructor(guesser, answer) {
    this.guesser = guesser;
    this.answer = answer;
  }

  /**
   * @returns {number} 스트라이크의 개수를 반환한다.
   */
  getStrikeCount() {
    return this.guesser.filter((num, index) => this.answer[index] === num).length;
  }

  /**
   * @returns {number} 볼의 개수를 반환한다.
   */
  getBallCount() {
    return this.guesser.filter(
      (num, index) => this.answer[index] !== num && this.answer.includes(num),
    ).length;
  }

  /**
   * @returns {boolean} 낫싱 여부를 반환한다.
   */
  isNothing() {
    return this.getStrikeCount() === 0 && this.getBallCount() === 0;
  }

  /**
   * @returns {string} 결과를 문자열로 반환한다.
   * @example
   * const score1 = new Score([1, 2, 3], [1, 2, 3]);
   * score1.toString(); // '3스트라이크'
   * const score2 = new Score([1, 2, 3], [1, 3, 2]);
   * score2.toString(); // '1볼 2스트라이크'
   * const score3 = new Score([1, 2, 3], [4, 5, 6]);
   * score3.toString(); // '낫싱'
   */
  toString() {
    if (this.isNothing()) return '낫싱';

    const result = [];
    if (this.getBallCount() > 0) result.push(`${this.getBallCount()}볼`);
    if (this.getStrikeCount() > 0) result.push(`${this.getStrikeCount()}스트라이크`);

    return result.join(' ');
  }

  /**
   * @returns {boolean} 승리 여부를 반환한다.
   */
  isWin() {
    return this.getStrikeCount() === MAX_INPUT_SIZE;
  }
}

export default Score;
