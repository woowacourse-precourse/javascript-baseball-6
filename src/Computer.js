import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME } from './constant.js';

class Computer {
  #numbers;
  constructor() {
    this.#numbers = this.#createNumbers();
  }

  #createNumbers() {
    const numbers = [];
    let number;

    for (let i = 0; i < 3; i++) {
      do {
        number = MissionUtils.Random.pickNumberInRange(1, 9);
      } while (numbers.includes(number));

      numbers.push(number);
    }

    return numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  judgment(input) {
    const numbers = [...input].map(Number);

    const same = numbers.reduce(
      (count, number) => (this.#numbers.includes(number) ? count + 1 : count),
      0
    );

    const strike = numbers.reduce(
      (count, number, index) =>
        this.#numbers[index] === number ? count + 1 : count,
      0
    );

    const ball = same - strike;

    MissionUtils.Console.print(GAME.RESULT(strike, ball));

    return strike === 3 ? GAME.PASS : GAME.FAIL;
  }
}

export default Computer;
