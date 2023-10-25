import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

export class Game {
  async startNewGame() {
    await this.#play();
  }

  async #play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = new Computer();
    computer.makeAnswer();

    return await computer.compareAnswerRepeatedly();
  }
}
