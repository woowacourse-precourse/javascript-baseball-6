import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME } from './constant.js';

class Computer {
  #numbers;
  #strike = 0;
  #ball = 0;

  constructor() {
    this.#numbers = Computer.#createNumbers();
  }

  get numbers() {
    return this.#numbers;
  }

  static #createNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }

  #getStrike(numbers) {
    return numbers.reduce(
      (count, number, index) =>
        this.#numbers[index] === number ? count + 1 : count,
      0
    );
  }

  #getBall(numbers) {
    return (
      numbers.reduce(
        (count, number) => (this.#numbers.includes(number) ? count + 1 : count),
        0
      ) - this.#strike
    );
  }

  judgment(input) {
    const numbers = Array.from(input, Number);
    this.#strike = this.#getStrike(numbers);
    this.#ball = this.#getBall(numbers);

    MissionUtils.Console.print(GAME.RESULT(this.#strike, this.#ball));

    return this.#strike === 3 ? GAME.PASS : GAME.FAIL;
  }
}

export default Computer;
