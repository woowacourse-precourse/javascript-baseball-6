export default class Referee {
  #strike;
  #ball;

  constructor() {
    this.#strike = 0;
    this.#ball = 0;
  }

  compareBalls(answer, guess) {
    this.#strike = 0;
    this.#ball = 0;

    this.#calculateScore(answer, guess);
    return this.#getResult();
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

  #getResult() {
    if (this.#strike === 0 && this.#ball === 0) {
      return "낫싱";
    }

    const result = [];
    this.#ball && result.push(`${this.#ball}볼`);
    this.#strike && result.push(`${this.#strike}스트라이크`);

    const output = result.join(" ");
    if (output) return output;
  }
}
