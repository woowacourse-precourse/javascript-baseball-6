/**
 * 상대방(컴퓨터)의 숫자를 저장하는 클래스
 */
class Opponent {
  /** @type {number} */
  #number;

  /**
   * 생성자: 상대방(컴퓨터)의 숫자를 저장한다.
   * @param {number} number
   */
  constructor(number) {
    this.#number = number;
  }

  /**
   * 상대방(컴퓨터)의 숫자를 반환한다.
   * @returns {number} #number
   */
  getNumber() {
    return this.#number;
  }
}

export default Opponent;
