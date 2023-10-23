import { Random } from "@woowacourse/mission-utils";
class Computer {
  constructor() {
    this.answer = this.randomNumGenerate();
  }
  randomNumGenerate() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  countStrike(input) {
    let strike = 0;
    input.forEach((num, idx) => {
      if (num == this.answer[idx]) strike++;
    });
    return strike;
  }
  countBall(input) {
    let ball = 0;
    input.forEach((num, idx) => {
      if (this.answer.includes(num) && num != this.answer[idx]) ball++;
    });
    return ball;
  }
  resultGenerator(input) {
    const count = { strike: 0, ball: 0 };
    count.strike = this.countStrike(input);
    count.ball = this.countBall(input);
    return count;
  }
}

export default Computer;
