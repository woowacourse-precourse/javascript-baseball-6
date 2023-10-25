import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";

export class Game {
  async startNewGame() {
    const completed = await this.#play();
    if (completed) {
      const replay = await this.#replayOrExit();

      if (replay) {
        this.startNewGame();
        return;
      }
      Console.print("게임 종료");
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
      return true;
    }
    if (input === "2") {
      return false;
    }

    throw new Error("입력값을 확인할 수 없습니다. 종료하겠습니다.");
  }
}
