import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class BaseballGame {
  constructor() {
    this.computerNumber = 0;
    this.userNumber = 0;
  }

  async playBaseball() {
    this.showGameStartMessage();
    this.getUserNumber();
  }

  async showGameStartMessage() {
    Console.print(GUIDE_MESSAGES.GAME_START_MESSAGE);
  }

  async getUserNumber() {
    this.userNumber = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_USER_NUMBER_MESSAGE);
  }

  async;
}

export default BaseballGame;
