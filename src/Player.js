class Player {
  #number;
  constructor(number) {
    this.#number = number;
  }

  get playerNumber() {
    return [...this.#number].map(Number);
  }
}

export default Player;
