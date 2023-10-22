import Computer from "./Computer.js";

class Game {
  constructor() {
    this.computer = new Computer();
  }

  startGame() {    
    this.computer.createRandomNumber();
  }

  makeComputerGrade(userInput) {
    return this.computer.gradingUserInput(userInput);
  }
}

export default Game
