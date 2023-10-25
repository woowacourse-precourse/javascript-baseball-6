import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

export class Game {
  async startNewGame() {
    const completed = await this.#play();
    if (completed) {
      await this.#replayOrExit();
    }
  }

  async #play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computer = new Computer();
    computer.makeAnswer();

    return await computer.compareAnswerRepeatedly();
  }

  async #replayOrExit() {
    const input = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );

    if (input === "1") {
      this.startNewGame();
      return;
    }
    if (input === "2") {
      Console.print("게임 종료");
      return;
    }

    // 1,2 외의 입력 시 재입력
    this.#replayOrExit();
  }
}
