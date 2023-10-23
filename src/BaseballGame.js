import User from './User';
import Computer from './Computer';
import GameDisplay from './GameDisplay';
import { calculateStrikeAndBall } from './StrikeAndBallCalculator';
import InputValidator from './utils/InputValidator';
import { RESTART_GAME } from './constants/GameConstants';
import { WINNING_STRIKE_COUNT } from './constants/NumberConstants';

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
    let isGameRunning = true;
    while (isGameRunning) {
      const userNumbers = await this.getUserInput();
      const { strike, ball } = this.calculateResult(userNumbers, computerNumbers);
      this.showGameResult(strike, ball);
      isGameRunning = !this.isGameWon(strike);
    }
  }

  async getUserInput() {
    return await this.user.getInput();
  }

  calculateResult(userNumbers, computerNumbers) {
    return calculateStrikeAndBall(userNumbers, computerNumbers);
  }

  showGameResult(strike, ball) {
    this.display.showResult(strike, ball);
  }

  isGameWon(strike) {
    const isWon = strike === WINNING_STRIKE_COUNT;
    if (isWon) {
      this.display.showWinMessage();
    }
    return isWon;
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
