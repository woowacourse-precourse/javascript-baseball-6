import { Console } from "@woowacourse/mission-utils";

export default class Hint {
  constructor() {}

  getHint(answer, guess) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (answer[i] === guess[i]) {
        strike++;
      } else if (answer.includes(guess[i])) {
        ball++;
      }
    }

    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
    }
    const result = [];
    strike && result.push(`${strike}스트라이크`);
    ball && result.push(`${ball}볼`);
    Console.print(result.join(" "));

    if (strike === 3) return true;
    return false;
  }
}
