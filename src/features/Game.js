import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";
import { MESSAGE } from "../constants/messages.js";

export class Game {
  async startNewGame() {
    const completed = await this.#play();
    if (completed) {
      const replay = await this.#replayOrExit();

      if (replay) {
        this.startNewGame();
        return;
      }
      Console.print(MESSAGE.GAME.END);
    }
  }

  async #play() {
    Console.print(MESSAGE.GAME.START);
    const computer = new Computer();
    computer.makeAnswer();

    return await computer.compareAnswerRepeatedly();
  }

  async #replayOrExit() {
    const input = await Console.readLineAsync(
      MESSAGE.PLAYER.SELECT_REPLAY_OR_EXIT
    );

    if (input === "1") {
      return true;
    }
    if (input === "2") {
      return false;
    }

    throw new Error(MESSAGE.ERROR.UNDEFINED);
  }
}
