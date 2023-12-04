import OutputView from "../OutputView.js";

export class Count {
  #ball = 0;
  #strike = 0;

  constructor(answer, input) {
    if (answer) {
      answer.map((ans, index) => {
        this.#setCount(input, ans, index);
      });
      OutputView.printResult(this.#strike, this.#ball);
    }
  }

  getBall() {
    return this.#ball;
  }

  getStrike() {
    return this.#strike;
  }

  #setCount(input, answer, index) {
    if (input.includes(answer)) {
      if (index === input.indexOf(answer)) {
        this.#strike += 1;
      } else {
        this.#ball += 1;
      }
    }
  }
}
