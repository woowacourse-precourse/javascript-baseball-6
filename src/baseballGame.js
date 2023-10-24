import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';
import { isValidUserNumber } from './validation.js';

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
    Console.print(GUIDE_MESSAGES.GAME_START);
  }

  async getUserNumber() {
    const userInput = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_USER_NUMBER);
    this.userNumber = isValidUserNumber(userInput) && +userInput;
  }
}

export default BaseballGame;
