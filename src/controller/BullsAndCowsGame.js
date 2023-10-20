import RandomPicker from "../models/RandomPicker.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import { MESSAGES } from "../constants/Messages.js";

class BullsAndCowsGame {

  constructor() {
    this.randomPicker = new RandomPicker();
    this.computerNumber = this.randomPicker.getComputerNumber();
    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
  }

  async startGame() {
    const userNumber = await InputView.getUserNumber(MESSAGES.INPUT_GUIDE);
    console.log(userNumber, this.randomPicker.computerNumber);
    
    if (userNumber === this.computerNumber) return this.finishGame();
    this.startGame();
  }

  finishGame() {
    return console.log('통과');
  };
};

export default BullsAndCowsGame;