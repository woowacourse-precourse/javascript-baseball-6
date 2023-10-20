class Player {
  #number;
  constructor(number) {
    this.#number = number;
  }

  get userNumberArray() {
    return [...this.#number].map(Number);
  }
}

export default Player;
