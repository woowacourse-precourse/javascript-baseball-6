import BaseballMaker from './BaseballMaker';

/**
 * '플레이어 야구공과 비교'의 역할을 수행
 */
class Computer {
  /**
   * 컴퓨터가 선택한 야구공
   * @private
   * @type {number[]}
   */
  #baseball;

  constructor() {
    this.#initBaseball();
  }

  /**
   * BaseballMaker를 통해 야구공을 생성하여 Computer의 baseball 필드를 초기화 하는 메서드
   * @private
   * @returns {void}
   */
  #initBaseball() {
    this.#baseball = BaseballMaker.create().createBaseball();
  }

  /**
   * 주어진 자릿수의 숫자가 스트라이크인지 판단하는 메서드
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @param {number} digit - 검사할 숫자의 위치
   * @private
   * @returns {boolean}
   */
  #isStrike(playerBaseball, digit) {
    return playerBaseball[digit] === this.#baseball[digit];
  }

  /**
   * 주어진 자릿수의 숫자가 볼인지 판단하는 메서드
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @param {number} digit - 검사할 숫자의 위치
   * @private
   * @returns {boolean}
   */
  #isBall(playerBaseball, digit) {
    return !this.#isStrike(playerBaseball, digit) && this.#baseball.includes(playerBaseball[digit]);
  }

  /**
   * 야구 게임의 스트라이크와 볼 결과를 계산하는 메서드
   * @param {Object} params - 계산에 필요한 파라미터
   * @param {Object} params.prevCompareResult - 이전 비교 결과
   * @param {number[]} params.playerBaseball - 플레이어의 야구공
   * @param {number} params.digit - 검사할 숫자의 위치
   * @private
   * @returns {Object} 계산 결과가 update된 새로운 비교 결과 객체
   */
  #calculateCompareResult({ prevCompareResult: { strike, ball }, playerBaseball, digit }) {
    return {
      strike: strike + (this.#isStrike(playerBaseball, digit) ? 1 : 0),
      ball: ball + (this.#isBall(playerBaseball, digit) ? 1 : 0),
    };
  }

  /**
   * 플레이어의 야구공과 컴퓨터의 야구공을 비교하여 스트라이크와 볼의 결과를 반환하는 메서드
   * @param {number[]} playerBaseball - 플레이어의 야구공
   * @public
   * @returns {Object} 스트라이크와 볼의 결과를 포함한 객체
   */
  comparePlayerBaseball(playerBaseball) {
    return this.#baseball.reduce(
      ({ strike, ball }, _, digit) =>
        this.#calculateCompareResult({
          prevCompareResult: { strike, ball },
          playerBaseball,
          digit,
        }),
      { strike: 0, ball: 0 },
    );
  }
}

export default Computer;
