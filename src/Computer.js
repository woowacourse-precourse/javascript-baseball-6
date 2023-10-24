import { MissionUtils } from '@woowacourse/mission-utils';

class Computer {
  #numbers;
  #strike = 0;
  #ball = 0;

  constructor() {
    this.#numbers = Computer.#createNumbers();
  }

  getNumbers() {
    return this.#numbers;
  }

  getResult() {
    return {
      strike: this.#strike,
      ball: this.#ball,
    };
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
  }
}

export default Computer;
