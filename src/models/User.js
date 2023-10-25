/**
 * 사용자의 입력 숫자를 저장하는 클래스
 */
class User {
  /** @type {number} */
  #number;

  /**
   * 사용자의 입력 숫자를 저장한다.
   * @param {string} numberString
   */
  setNumber(numberString) {
    this.#number = Number(numberString);
  }
}

export default User;
