import RandomPicker from "../models/RandomPicker.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/Messages.js";

class BullsAndCowsGame {

  constructor() {
    this.randomPicker = new RandomPicker();
    this.randomPicker.getComputerNumber();
  }

  async startGame() {
    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
    
    const userNumber = await InputView.getUserNumber(MESSAGES.INPUT_GUIDE);
    // console.log(userNumber);
  }
};

export default BullsAndCowsGame;