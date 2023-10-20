import {Console} from '@woowacourse/mission-utils';
import MESSAGES from './Messages';

class BaseballGame {
  play() {
    this.printStart();
  }

  printStart() {
    Console.print(MESSAGES.start);
  }
}

export default BaseballGame;
