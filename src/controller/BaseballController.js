import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGES from '../Messages';
import ERRORS from '../Errors';

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
    const gameResult = [0, 0];
    do {
      this.#Console.readLineAsync(MESSAGES.INSERT_NUMBER)
        .then((result) => {
          const inputArr = result.split(''); // ['1','2','3']
          if (inputArr.length > 3) throw ERRORS.INPUT_LENGTH;
          inputNumberTest(inputArr);
          // 같은 숫자가 여러개 들어올 경우 에러 처리
          computer_balls.forEach((computer_ball, comp_index) => {
            inputArr.forEach((input_ball, user_index) => {
              if (computer_ball === input_ball && comp_index === user_index) gameResult[0] += 1;
              if (computer_ball === input_ball && comp_index !== user_index) gameResult[1] += 1;
            });
          });
          if (gameResult[0] === 3) {
            Console.print(MESSAGES.ANSWER);
            this.#Console.readLineAsync(MESSAGES.RESTART);
          }
          if (gameResult === [0, 0]) Console.print(MESSAGES.NOTHING);
          if (gameResult[1] === 0) Console.print(`${gameResult[0]}${MESSAGES.STRIKE}`);
          if (gameResult[0] === 0) Console.print(`${gameResult[1]}${MESSAGES.BALL}`);
          if (gameResult[0] !== 0 && gameResult[1] !== 0) Console.print(`${gameResult[1]}${MESSAGES.BALL} ${gameResult[0]}${MESSAGES.STRIKE}`);
        })
        .catch((error) => {
          console.log(`[ERROR]${error}`);
        });
    } while (computer_balls.length === 3);// while 문의 경우, 거짓이 될 경우에 반복문 종료
  }
}

export default BaseballController;
