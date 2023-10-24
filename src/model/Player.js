export default class Player {
  #selectNumber;

  setSelectNumber(input) {
    this.#selectNumber = new Set(input.split('').map(Number));
  }

  getSelectNumber() {
    return this.#selectNumber;
  }
}
