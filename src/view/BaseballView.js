import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

export class BaseballView {
  printMessage(message) {
    Console.print(message);
  }

  async promptUserInput(message) {
    return Console.readLineAsync(message);
  }

  printGameResult({ ball, strike }) {
    this.printMessage(MESSAGE.getGameResult({ ball, strike }));
  }
}
