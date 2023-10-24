export default class Player {
  constructor() {
    this.number = null;
  }

  /**
   * Player 클래스에 저장된 값을 가져옵니다.
   * @returns [컴퓨터가 설정한 수]
   */
  getNumber() {
    return this.number;
  }

  /**
   * player가 입력한 수를 Player 클래스에 저장합니다.
   * @param {string[]} newNumber [player가 입력한 수]
   */
  setNumber(newNumber) {
    this.number = newNumber;
  }
}