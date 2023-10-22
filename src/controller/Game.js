import ComputerPick from "../models/ComputerPick.js";
import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";

class Game {
  constructor() {
    this.consoleOutput = new ConsoleOutput();
    this.consoleInput = new ConsoleInput();
  }

  async startGame() {
    this.answer = new ComputerPick().getAnswer();
    this.consoleOutput.printStartMessage();
    await this.playGame();
  }

  async playGame() {
    this.consoleInput.getUserInput();
  }

  async finishame() {}
}

export default Game;
