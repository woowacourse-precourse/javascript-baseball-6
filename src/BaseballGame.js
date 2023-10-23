import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';
import Computer from './Computer';

class BaseballGame {
  computer;

  async play() {
    this.printStart();
    this.generateComputer();
    await this.readNumber();
  }

  printStart() {
    Console.print(MESSAGES.start);
  }
  generateComputer() {
    this.computer = Computer.generateNumber();
  }

  async readNumber() {
    const userNumber = await Console.readLineAsync(MESSAGES.numberQuery);
  }
}

export default BaseballGame;
