class Player {
  #number;
  constructor(number) {
    this.#number = number;
  }

  getPlayerNumber() {
    return [...this.#number].map(Number);
  }
}

export default Player;
