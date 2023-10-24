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
    const computer_balls = [];
    while (computer_balls.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      computer_balls.push(number);
    }
    console.log(computer_balls);
  }
}

export default BaseballController;
