import RandomNumberGenerator from "../models/RandomNumberGenerator.js";
import GameAnalyzer from "../models/GameAnalyzer.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/StringMessages.js";
import { USER_COMMAND } from "../constants/Constants.js";

class BullsAndCowsGame {
  constructor() {
    this.randomNumberGenerator = new RandomNumberGenerator();

    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
  }

  async startGame() {
    const computerNumber = this.randomNumberGenerator.getComputerNumber();
    const userNumber = await InputView.getUserNumber(MESSAGES.INPUT_GUIDE);
    const { ball, strike } = GameAnalyzer.getBallAndStrike(userNumber, computerNumber);

    OutputView.printGameProgress(ball, strike);

    if (userNumber === computerNumber) return this.finishGame();

    return this.startGame();
  }

  async finishGame() {
    OutputView.printStaticMessage(MESSAGES.END_GUIDE);

    const userCommand = await InputView.getUserCommand(MESSAGES.REPLAY_GUIDE);

    if (userCommand === USER_COMMAND.REPLAY) {
      this.randomNumberGenerator.initComputerNumber();
      return this.startGame();
    };
    
    return;
  }
}

export default BullsAndCowsGame;