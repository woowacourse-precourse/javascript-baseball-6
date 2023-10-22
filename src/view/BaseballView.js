import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

export class BaseballView {
  printMessage(message) {
    Console.print(message);
  }

  async getInputAsync(message) {
    try {
      return Console.readLineAsync(message);
    } catch (err) {
      this.printMessage(err);
    }
  }

  printGameResult({ ball, strike }) {
    this.printMessage(MESSAGE.getGameResult({ ball, strike }));
  }
}
