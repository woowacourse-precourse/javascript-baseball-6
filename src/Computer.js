import { Random } from "@woowacourse/mission-utils";

class Computer {
  constructor() {
    this.initNumbers();
  }

  initNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    this.numbers = numbers;
  }

  calculateResult(userNumbers) {
    let strike = 0;
    let ball = 0;

    Array.from(userNumbers).forEach((number, idx) => {
      if (number === this.numbers[idx]) {
        strike += 1;
      } else if (this.numbers.includes(number)) {
        ball += 1;
      }
    });

    this.strike = strike;
    this.ball = ball;
  }
}

export default Computer;
