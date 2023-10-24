class BetweenNumber {
  constructor(computerNumber, playerNumber) {
    this.computerNumber = computerNumber;
    this.playerNumber = playerNumber;
  }

  arrNumber(arr) {
    return arr.split('').map(Number); // 배열로 바꿈
  }

  getComputerArray() {
    return this.arrNumber(this.computerNumber);
  }

  getPlayerArray() {
    return this.arrNumber(this.playerNumber);
  }
}

export default BetweenNumber;