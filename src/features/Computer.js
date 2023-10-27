import { Random } from "@woowacourse/mission-utils";
import { player } from "./Player.js";
import { Count } from "./Count.js";

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
    while (this.#count.strike !== 3) {
      this.#count = new Count(this.#answer);
      const playerInput = await player.getPlayNumber();
      this.#count.set(playerInput);
      this.#count.print();
    }
    return true;
  }
}
