import { Random } from "@woowacourse/mission-utils";
import { Count } from "./Count.js";
import InputView from "../InputView.js";

export class Computer {
  #answer = [];
  #count = new Count();

  makeAnswer() {
    while (this.#answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  async compareAnswer() {
    while (this.#count.getStrike() !== 3) {
      const playerInput = await InputView.readPlayNumber();
      this.#count = new Count(this.#answer, playerInput);
    }
    return true;
  }
}
