import IOManager from "./IOManager.js";
import Computer from "./Computer.js";
import GameResult from "./GameResult.js";

class Game {
  constructor() {
    this.ioManager = new IOManager();
    this.computer = new Computer();
    this.isGameEnded = false;
  }

  async play() {
    while (!this.isGameEnded) {
      const userInput = await this.ioManager.getThreeNumberInput();
      const gameResult = new GameResult(this.computer, userInput);

      this.ioManager.printGameStatus(gameResult);

      if (gameResult.isGameEnded()) {
        this.isGameEnded = true;
      }
    }
    this.ioManager.printGameEndMessage();
  }
}

export default Game;
