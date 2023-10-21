import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

export class BaseballView {
  printMessage(message) {
    Console.print(message);
  }

  getInputAsync(message) {
    return Console.readLineAsync(message);
  }

  printGameResult({ ball, strike, isDone }) {
    if (isDone) {
      this.printMessage(MESSAGE.getGameResult({ ball, strike }));
      this.getInputAsync(MESSAGE.RESTART);
      return;
    }

    this.printMessage(MESSAGE.getGameResult({ ball, strike }));
  }
}
