import GameAnalyzer from "../models/GameAnalyzer.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/messages.js";
import { USER_COMMAND } from "../constants/conditions.js";

class BullsAndCowsGameController {

  #computer;

  constructor(computerNumberGenerator) {
    this.#computer = computerNumberGenerator;

    OutputView.printStaticMessage(MESSAGES.startGuide);
  }

  async startGame() {
    const computerNumber = this.#computer.getComputerNumber();
    const userNumber = await InputView.getUserNumber(MESSAGES.inputGuide);
    const { ball, strike } = GameAnalyzer.getBallAndStrike(userNumber, computerNumber);

    OutputView.printGameProgress(ball, strike);

    if (userNumber === computerNumber) return this.finishGame();

    return this.startGame();
  }

  async finishGame() {
    OutputView.printStaticMessage(MESSAGES.endGuide);

    const userCommand = await InputView.getUserCommand(MESSAGES.replayGuide);

    if (userCommand === USER_COMMAND.replay) {
      this.#computer.initComputerNumber();
      return this.startGame();
    };
    
    return;
  }
}

export default BullsAndCowsGameController;