class Player {
  #number;
  constructor(number) {
    this.#number = number;
  }

  get numberArray() {
    return [...this.#number].map(Number);
  }
}

export default Player;
