import ComputerPick from "../models/ComputerPick.js";
import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";
import GameCalculation from "../models/GameCalculation.js";
import { GAME_RULES } from "../constants/Constants.js";

class Game {
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
      }
      ConsoleOutput.printResultMessage(result.ball, result.strike);
    }
  }

  async finishGame() {
    console.log("피니쉬 체크");
    return;
  }
}

export default Game;
