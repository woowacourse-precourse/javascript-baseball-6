import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import { inputValidator, playAgainInputValidator } from './utils/inputValidator.js';
import { GUIDE_MESSAGE, RESTART_GAME_NUMBERS } from '../constants/index.js';

class Player {
  /**
   * @type {[number, number, number]}
   */
  #playerNumber;

  async startGame() {
    this.computer = new Computer();
    await this.getUserInput();
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGE.INPUT);
    this.handlePlayerNumbers(userInput);
  }

  handlePlayerNumbers(userAns) {
    this.#playerNumber = userAns.split('').map(Number);
    inputValidator(this.#playerNumber);
    this.requestBallCount();
  }

  requestBallCount() {
    const [ballCountMessage, strike] = this.computer.checkBallCount(this.#playerNumber);
    Console.print(ballCountMessage);
    if (strike === 3) {
      this.playAgain();
    } else {
      this.getUserInput();
    }
  }

  async playAgain() {
    Console.print(GUIDE_MESSAGE.PLAYER_WIN);
    const userInput = await Console.readLineAsync(GUIDE_MESSAGE.RESTART);

    playAgainInputValidator(userInput);

    if (userInput === RESTART_GAME_NUMBERS.RESTART) {
      this.startGame();
    } else {
      return;
    }
  }
}

export default Player;
