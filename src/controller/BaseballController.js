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
    this.#Console.readLineAsync(MESSAGES.INSERT_NUMBER)
      .then((result) => {
        const input = result.split(''); // ['1','2','3']
        // console.log(input);
        // 에러 처리 해야 하는 부분 => 1. 숫자가 3개 이상 입력 된 경우  2. 숫자가 아닌 글자가 입력된 경우
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default BaseballController;
