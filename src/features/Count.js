import { Console } from "@woowacourse/mission-utils";
import { COMPUTER_MESSAGE, COUNT } from "../constants.js";

export class Count {
  ball = 0;
  strike = 0;

  constructor(answer) {
    this.answer = answer;
  }

  set(input) {
    this.answer.map((ans, index) => {
      if (input.includes(ans)) {
        let key = "ball";
        if (index === input.indexOf(ans)) {
          key = "strike";
        }
        this[key] += 1;
      }
    });
  }

  print() {
    if (this.strike === 0 && this.ball === 0) {
      Console.print(COUNT.NOTHING);
      return;
    }

    Console.print(`${COUNT.BALL(this.ball)}${COUNT.STRIKE(this.strike)}`);

    if (this.strike === 3) {
      Console.print(COMPUTER_MESSAGE.COMPLETED);
    }
  }
}
