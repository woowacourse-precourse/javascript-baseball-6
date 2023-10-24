import { Console } from "@woowacourse/mission-utils";

export default class Referee {
  #strike;
  #ball;
  constructor() {
    this.#strike = 0;
    this.#ball = 0;
  }

  #calculateScore(answer, guess) {
    [...guess].forEach((num, idx) => {
      if (num === answer[idx]) {
        this.#strike++;
      } else if (answer.includes(num)) {
        this.#ball++;
      }
    });
  }

  #printResult() {
    if (this.#strike === 0 && this.#ball === 0) {
      Console.print("낫싱");
      return;
    }

    const result = [];
    this.#ball && result.push(`${this.#ball}볼`);
    this.#strike && result.push(`${this.#strike}스트라이크`);

    const output = result.join(" ");
    if (output) Console.print(output);
  }

  getHint(answer, guess) {
    this.#strike = 0;
    this.#ball = 0;

    this.#calculateScore(answer, guess);
    this.#printResult();
  }

  isThreeStrikes() {
    return this.#strike === 3;
  }
}
