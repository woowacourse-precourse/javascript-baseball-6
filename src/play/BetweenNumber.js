class BetweenNumber {
  constructor(computerNumber, playerNumber) {
    this.computerNumber = computerNumber;
    this.playerNumber = playerNumber;
  }

  arrNumber(arr) {
    return arr.split('').map(Number);
  }

  getComputerArray() {
    return this.arrNumber(this.computerNumber);
  }

  getPlayerArray() {
    return this.arrNumber(this.playerNumber);
  }
}

export default BetweenNumber;