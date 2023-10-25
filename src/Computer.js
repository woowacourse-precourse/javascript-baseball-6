import { Random } from '@woowacourse/mission-utils';

class Computer {
  constructor() {
    this.answer = this.randomNumGenerator();
  }

  /**
   *
   * @returns {[number, number, number]}
   */
  randomNumGenerator() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers;
  }

  /**
   *
   * @param {[number, number, number]} input
   * @returns {number}
   */
  countStrike(input) {
    let strike = 0;

    input.forEach((num, idx) => {
      if (num == this.answer[idx]) strike += 1;
    });

    return strike;
  }

  /**
   *
   * @param {[number, number, number]} input
   * @returns {number}
   */
  countBall(input) {
    let ball = 0;

    input.forEach((num, idx) => {
      if (this.answer.includes(num) && num != this.answer[idx]) ball += 1;
    });

    return ball;
  }

  /**
   *
   * @param {[number, number, number]} input
   * @returns {{number,number}}
   */
  resultGenerator(input) {
    const strike = this.countStrike(input);
    const ball = this.countBall(input);

    return { strike, ball };
  }
}

export default Computer;
