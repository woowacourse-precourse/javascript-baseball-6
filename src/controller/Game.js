import ComputerPick from "../models/ComputerPick.js";
import ConsoleOutput from "../views/ConsoleOutput.js";

class Game {
  constructor() {
    this.answer = new ComputerPick().getAnswer();
    this.consoleOutput = new ConsoleOutput();
  }

  async startGame() {
    this.consoleOutput.printStartMessage();
  }
}

export default Game;
