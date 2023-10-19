import { MissionUtils } from '@woowacourse/mission-utils';

export default class Opponent {
  #numbers = [];

  constructor() {}

  resetNumbers() {
    this.#numbers = [];
  }

  makeNumbers() {
    while (this.#numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.#numbers.includes(number)) {
        this.#numbers.push(number);
      }
    }
  }

  tellResultOf(numbers) {
    let strike = 0;
    let ball = 0;

    this.#numbers.forEach((num, idx) => {
      if (numbers[idx] === String(num)) {
        strike++;
      } else if (numbers.includes(num)) {
        ball++;
      }
    });

    return { strike, ball };
  }
}
