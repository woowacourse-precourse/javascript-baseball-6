import { RESTART_GAME, WIN_COUNT } from './Constants.js';
import { ballCount } from './GameEngine.js';
import ErrorChecker from './ErrorChecker.js';
import UserInput from './UserInput.js';
import Computer from './Computer.js';
import GameMessages from './GameMessages.js';

export default class PlayBaseball {
  constructor() {
    this.computer = new Computer();
    this.user = new UserInput();
    this.message = new GameMessages();
  }

  async start() {
    const computerNumbers = this.computer.generateNumbers();
    this.message.showStartMessage();
    await this.playGame(computerNumbers);
    await this.showGameEnd();
  }

  async playGame(computerNumbers) {
    let nowPlayingGame = false;
    while (!nowPlayingGame) {
      const userNumbers = await this.user.getInput();
      const { strike, ball } = ballCount(userNumbers, computerNumbers);
      this.message.showCountStatus(strike, ball);
      nowPlayingGame = (strike === WIN_COUNT);
      if (nowPlayingGame) {
        this.message.showWinMessage();
      }
    }
  }

  async showGameEnd() {
    const gameEndChoice = await this.message.showEndMessage();
    ErrorChecker.validateGameEndInput(gameEndChoice);

    if (gameEndChoice === RESTART_GAME) {
      return this.start();
    }
    return false;
  }
}
