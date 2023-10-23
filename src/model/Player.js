export default class Player {
  #playerNumber;

  getPlayerNumber() {
    return this.#playerNumber;
  }

  setPlayerNumber(playerNumber) {
    this.#playerNumber = playerNumber;
  }
}
