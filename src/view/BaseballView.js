import { Console } from '@woowacourse/mission-utils';

export class BaseballView {
  printMessage(message) {
    Console.print(message);
  }

  getInputAsync(message) {
    return Console.readLineAsync(message);
  }
}
