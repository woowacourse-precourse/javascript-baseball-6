import { Console, Random } from "@woowacourse/mission-utils";
import { player } from "./Player.js";
import { Count } from "./Count.js";

export const COMPUTER_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  COMPLETED: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

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
