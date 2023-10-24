import ComputerPick from "../models/ComputerPick.js";
import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";
import GameCalculation from "../models/GameCalculation.js";
import { GAME_RULES } from "../constants/Constants.js";

class Game {
  constructor() {
    this.win = 0;
  }

  async startGame() {
    this.answer = new ComputerPick().getAnswer();
    ConsoleOutput.printStartMessage();
    await this.playGame();
    await this.finishGame();
  }

  async playGame() {
    let strikeOut = false;
    while (!strikeOut) {
      const userInput = await ConsoleInput.getUserInput();
      const result = GameCalculation(userInput, this.answer);
      if (result.strike === GAME_RULES.LIMIT_LENGTH) {
        strikeOut = GAME_RULES.LIMIT_LENGTH;
        this.win++;
      }
      ConsoleOutput.printResultMessage(result.ball, result.strike);
    }
  }

  async finishGame() {
    ConsoleOutput.printEndMessage();
    const restartInput = await ConsoleInput.getRestartInput();

    if (restartInput === GAME_RULES.RESTART_GAME) {
      return this.startGame();
    }

    if (restartInput === GAME_RULES.END_GAME) {
      // ConsoleOutput.printWinMessage(this.win);
      return;
    }
  }
}

export default Game;
