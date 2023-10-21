import RandomPicker from "../models/RandomPicker.js";
import GameAnalyzer from "../models/GameAnalyzer.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/Messages.js";
import { USER_COMMAND } from "../constants/Constants.js";

class BullsAndCowsGame {

  constructor() {
    this.computerNumber = new RandomPicker().getComputerNumber();
    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
  }

  async startGame() {
    const userNumber = await InputView.getUserNumber(MESSAGES.INPUT_GUIDE);    
    const progress = GameAnalyzer.getBullsAndCows(userNumber, this.computerNumber);

    OutputView.progressMessage(progress.ball, progress.strike);

    if (userNumber === this.computerNumber) return this.finishGame();

    return this.startGame();
  }

  async finishGame() {
    OutputView.printStaticMessage(MESSAGES.END_GUIDE);

    const userCommand = await InputView.getUserCommand(MESSAGES.REPLAY_GUIDE);

    if (userCommand === USER_COMMAND.REPLAY) {
      this.computerNumber = new RandomPicker().getComputerNumber();
      return this.startGame();
    }

    return;
  }
}

export default BullsAndCowsGame;