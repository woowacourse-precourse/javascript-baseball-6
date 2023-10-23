import RandomNumberGenerator from "../models/RandomNumberGenerator.js";
import GameAnalyzer from "../models/GameAnalyzer.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/messages.js";
import { USER_COMMAND } from "../constants/conditions.js";

class BullsAndCowsGame {
  constructor() {
    this.randomNumberGenerator = new RandomNumberGenerator();

    OutputView.printStaticMessage(MESSAGES.startGuide);
  }

  async startGame() {
    const computerNumber = this.randomNumberGenerator.getComputerNumber();
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
      this.randomNumberGenerator.initComputerNumber();
      return this.startGame();
    };
    
    return;
  }
}

export default BullsAndCowsGame;