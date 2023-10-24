export default class GameModel {
  constructor() {
    this.computerNumber = [];
    this.userNumber = [];
  }

  getComputerNumber() {
    return this.computerNumber;
  }

  getUserNumber() {
    return this.userNumber;
  }

  updateComputerNumber(computerNumber) {
    this.computerNumber = computerNumber;
  }

  updateUserNumber(userNumber) {
    this.userNumber = userNumber;
  }
}
