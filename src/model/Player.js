export default class Player {
  #selectNumber;

  setSelectNumber(input) {
    this.#selectNumber = input;
  }

  getSelectNumber() {
    return this.#selectNumber;
  }
}
