import Computer from "./Computer.js";

class Game {
  #computer = null;

  constructor() {
    this.#computer = new Computer();
  }

  startGame() {    
    this.#computer.createRandomNumber();
  }

  makeComputerGrade(userInput) {
    return this.#computer.gradingUserInput(userInput);
  }
}

export default Game
