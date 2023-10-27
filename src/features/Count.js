import { Console } from "@woowacourse/mission-utils";
import { COMPUTER_MESSAGE } from "./Computer";

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
      Console.print("낫싱");
      return;
    }

    Console.print(
      `${this.ball > 0 ? `${this.ball}볼 ` : ""}${
        this.strike > 0 ? `${this.strike}스트라이크` : ""
      }`
    );

    if (this.strike === 3) {
      Console.print(COMPUTER_MESSAGE.COMPLETED);
    }
  }
}
