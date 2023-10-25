/**
 * 사용자의 입력 숫자를 저장하는 클래스
 */
class User {
  /** @type {number} */
  #number;

  /** @type {boolean} */
  #isRestart;

  /**
   * 사용자의 입력 숫자를 저장한다.
   * @param {string} numberString
   */
  setNumber(numberString) {
    this.#number = Number(numberString);
  }

  /**
   * 사용자의 입력 숫자를 반환한다.
   * @return {number}
   */
  getNumber() {
    return this.#number;
  }

  /**
   * 사용자가 재시작을 원하는지 여부를 저장한다.
   */
  setRestart(isRestart) {
    this.#isRestart = isRestart;
  }

  /**
   * 사용자가 재시작을 원하는지 여부를 반환한다.
   */
  getRestart() {
    return this.#isRestart;
  }
}

export default User;
