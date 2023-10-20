import RandomPicker from "../models/RandomPicker.js";
import OutputView from "../views/OutputView.js";
import { MESSAGES } from "../constants/Messages.js";

class BullsAndCowsGame {

  constructor() {
    this.randomPicker = new RandomPicker();
    this.randomPicker.getComputerNumber();
  }

  async startGame() {
    OutputView.printStaticMessage(MESSAGES.START_GUIDE);
    
    // 사용자의 입력값 받기
  }
};

export default BullsAndCowsGame;