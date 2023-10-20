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
}

export default Computer;
