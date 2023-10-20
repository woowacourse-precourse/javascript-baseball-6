import RandomPicker from "../models/RandomPicker.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/Messages.js";

class BullsAndCowsGame {

  constructor() {
    this.computerNumber = new RandomPicker().getComputerNumber();
    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
  }

  async startGame() {
    const userNumber = await InputView.getUserNumber(MESSAGES.INPUT_GUIDE);
    // console.log(userNumber, this.computerNumber);
    
    if (userNumber === this.computerNumber) return this.finishGame();
    this.startGame();
  }

  async finishGame() {
    OutputView.printStaticMessage(MESSAGES.END_GUIDE);
    const userCommand = await InputView.getUserCommand(MESSAGES.REPLAY_GUIDE);

    if (userCommand === 1) {
      this.computerNumber = new RandomPicker().getComputerNumber();
      return this.startGame();
    }

    return;
  }
}

export default BullsAndCowsGame;