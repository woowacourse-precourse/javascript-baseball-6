import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGES from '../Messages';
import ERRORS from '../Errors.js';

class BaseballController {
  #Console;

  #Random;

  constructor() {
    this.#Console = Console;
    this.#Random = Random;
  }

  run() {
    function inputNumberTest(arr) {
      const reg = /^[1-9]$/;
      arr.forEach((item) => {
        if (!reg.test(item)) throw ERRORS.TYPE;
      });
    }

    this.#Console.print(MESSAGES.GAME_START);
    const computer_balls = [];
    while (computer_balls.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      computer_balls.push(number);
    }
    this.#Console.readLineAsync(MESSAGES.INSERT_NUMBER)
      .then((result) => {
        const inputArr = result.split(''); // ['1','2','3']
        if (inputArr.length > 3) throw ERRORS.INPUT_LENGTH;
        inputNumberTest(inputArr);
      })
      .catch((error) => {
        console.log(`[ERROR]${error}`);
      });
  }
}

export default BaseballController;
