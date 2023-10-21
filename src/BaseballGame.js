import User from "./User.js";
import Computer from './Computer.js';
import GameDisplay from "./GameDisplay.js";
import StrikeAndBallCalculator from './StrikeAndBallCalculator.js';

export default class BaseballGame {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.display = new GameDisplay();
  }

  async start() {
    const computerNumbers = this.computer.generateNumbers();
    this.display.showStartMessage();
    await this.playGame(computerNumbers);
  }

  async playGame(computerNumbers) {
      let isEqual = false;
      while (!isEqual) {
        const userNumbers = await this.user.getInput();
        const { strike, ball } = StrikeAndBallCalculator.calculate(userNumbers, computerNumbers);
        this.display.showResult(strike, ball);
        isEqual = (strike === 3);
        if(isEqual) {
            this.display.showWinMessage();
          }
      }
  
      const gameEndChoice = await this.display.showEndMessage();
      if(gameEndChoice === '1') {
        return this.start();
      }
      
      return;
   } 
}
