import ComputerPick from "../models/ComputerPick.js";
import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";

class Game {
  async startGame() {
    this.answer = new ComputerPick().getAnswer();
    ConsoleOutput.printStartMessage();
    await this.playGame();
  }

  async playGame() {
    ConsoleInput.getUserInput();
  }

  async finishame() {}
}

export default Game;
