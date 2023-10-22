import { Console } from "@woowacourse/mission-utils";

export default class Referee {
  strike;
  ball;
  constructor() {
    this.strike = 0;
    this.ball = 0;
  }

  getHint(answer, guess) {
    this.strike = 0;
    this.ball = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === guess[i]) {
        this.strike++;
      } else if (answer.includes(guess[i])) {
        this.ball++;
      }
    }

    if (this.strike === 0 && this.ball === 0) {
      Console.print("낫싱");
      return;
    }
    const result = [];
    this.ball && result.push(`${this.ball}볼`);
    this.strike && result.push(`${this.strike}스트라이크`);

    const output = result.join(" ");
    if (output) Console.print(output);
  }

  isThreeStrikes() {
    return this.strike === 3;
  }
}
