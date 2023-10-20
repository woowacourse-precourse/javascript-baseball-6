import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';
import Computer from './Computer';

class BaseballGame {
  computer;

  play() {
    this.printStart();
  }

  printStart() {
    Console.print(MESSAGES.start);
  }
  generateComputer() {
    this.computer = Computer.generateNumber();
  }
}

export default BaseballGame;
