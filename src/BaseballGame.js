import User from './User.js';
import Computer from './Computer.js';
import GameDisplay from './GameDisplay.js';
import { calculateStrikeAndBall } from './StrikeAndBallCalculator.js';
import InputValidator from './utils/InputValidator.js';
import { RESTART_GAME } from './constants/GameConstants.js';

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
    await this.showGameEnd();
  }

  async playGame(computerNumbers) {
    let isEqual = false;
    while (!isEqual) {
      const userNumbers = await this.user.getInput();
      const { strike, ball } = calculateStrikeAndBall(userNumbers, computerNumbers);
      this.display.showResult(strike, ball);
      isEqual = (strike === 3);
      if (isEqual) {
        this.display.showWinMessage();
      }
    }
  }

  async showGameEnd() {
    const gameEndChoice = await this.display.showEndMessage();
    InputValidator.validateGameEndInput(gameEndChoice);

    if (gameEndChoice === RESTART_GAME) {
      return this.start();
    }
    return false;
  }
}
