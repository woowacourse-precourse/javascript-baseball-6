import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGES from '../Messages';

class BaseballController {
  #Console;

  #Random;

  constructor() {
    this.#Console = Console;
    this.#Random = Random;
  }

  run() {
    this.#Console.print(MESSAGES.GAME_START);
  }
}

export default BaseballController;
