import { MissionUtils } from '@woowacourse/mission-utils';

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

    if (ball === 0 && strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
      return strike === 3 ? 'pass' : 'fail';
    }

    if (ball === 0 && strike === 0) {
      MissionUtils.Console.print('낫싱');
      return 'fail';
    }

    if (strike === 0 && ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
      return 'fail';
    }

    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    return 'fail';
  }
}

export default Computer;
