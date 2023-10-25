import { ANSWER_LENGTH } from "./constants.js";
import IOManager from "./IOManager.js";
import Computer from "./Computer.js";

class Game {
  constructor() {
    this.ioManager = new IOManager();
    this.computer = new Computer();
    this.isGameEnded = false;
  }

  async play() {
    while (!this.isGameEnded) {
      const userInput = await this.ioManager.getThreeNumberInput();
      const { strike, ball } =
        this.computer.calculateStrikesAndBalls(userInput);

      this.ioManager.printGameStatus(strike, ball);

      if (strike === ANSWER_LENGTH) {
        this.isGameEnded = true;
      }
    }
    this.ioManager.printGameEndMessage();
  }
}

export default Game;
