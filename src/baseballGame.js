import { GUIDE_MESSAGES } from './constants.js';
import { Console } from '@woowacourse/mission-utils';

class BaseballGame {
  async playBaseball() {
    this.showGameStartMessage();
    this.showEnterUserNumberMessage();
  }

  async showGameStartMessage() {
    Console.print(GUIDE_MESSAGES.GAME_START_MESSAGE);
  }

  async showEnterUserNumberMessage() {
    Console.print(GUIDE_MESSAGES.ENTER_USER_NUMBER_MESSAGE);
  }
}

export default BaseballGame;
