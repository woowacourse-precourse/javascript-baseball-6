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
    }
    const result = [];
    this.strike && result.push(`${this.strike}스트라이크`);
    this.ball && result.push(`${this.ball}볼`);
    Console.print(result.join(" "));
  }

  isThreeStrikes() {
    if (this.strike === 3) return true;
    return false;
  }
}
