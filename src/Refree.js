class Refree {
  #playerNumber;
  #opponentNumber;

  constructor(playerNumber, opponentNumber) {
    this.#playerNumber = playerNumber;
    this.#opponentNumber = opponentNumber;
  }

  playGame() {
    const ball = this.countBall();
    const strike = this.countStrike();
  }

  countBall() {
    return this.#playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] !== target
        ? count + 1
        : count;
    }, 0);
  }

  countStrike() {
    return this.#playerNumber.reduce((count, target, index) => {
      return this.#opponentNumber.includes(target) && this.#opponentNumber[index] === target
        ? count + 1
        : count;
    }, 0);
  }
}
export default Refree;
