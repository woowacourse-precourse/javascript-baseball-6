import BaseballMaker from './BaseballMaker.js';

class Computer {
  /**
   * @private
   * @type {number[]}
   */
  #baseball;

  constructor() {
    this.#initBaseball();
  }

  /**
   * @private
   * @returns {void}
   */
  #initBaseball() {
    this.#baseball = BaseballMaker.create().createBaseball();
  }

  /**
   * @private
   * @param {number} playerBaseballNumber - 플레이어의 야구공 번호
   * @param {number} digit - 검사할 숫자의 위치
   * @returns {boolean} 스트라이크 판정 여부
   */
  #isStrike(playerBaseballNumber, digit) {
    return playerBaseballNumber === this.#baseball[digit];
  }

  /**
   * @private
   * @param {number} playerBaseballNumber - 플레이어의 야구공 번호
   * @param {number} digit - 검사할 숫자의 위치
   * @returns {boolean} 볼 판정 여부
   */
  #isBall(playerBaseballNumber, digit) {
    return (
      !this.#isStrike(playerBaseballNumber, digit) && this.#baseball.includes(playerBaseballNumber)
    );
  }

  /**
   * @private
   * @param {import('../utils/jsDoc.js').CalculateCompareResultParams} calculateCompareResultParams - 계산에 필요한 파라미터
   * @param {import('../utils/jsDoc.js').CompareResult} calculateCompareResultParams.prevCompareResult - 이전 비교 결과
   * @returns {import('../utils/jsDoc.js').CompareResult} 계산 결과가 update된 새로운 비교 결과 객체
   */
  #calculateCompareResult({ prevCompareResult: { strike, ball }, playerBaseballNumber, digit }) {
    return {
      strike: strike + (this.#isStrike(playerBaseballNumber, digit) ? 1 : 0),
      ball: ball + (this.#isBall(playerBaseballNumber, digit) ? 1 : 0),
    };
  }

  /**
   * @public
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @returns {import('../utils/jsDoc.js').CompareResult} 스트라이크와 볼의 결과를 포함한 객체
   */
  comparePlayerBaseball(playerBaseball) {
    return playerBaseball.reduce(
      (prevCompareResult, playerBaseballNumber, digit) =>
        this.#calculateCompareResult({ prevCompareResult, playerBaseballNumber, digit }),
      { strike: 0, ball: 0 },
    );
  }
}

export default Computer;
