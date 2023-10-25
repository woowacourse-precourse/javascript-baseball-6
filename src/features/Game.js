import { Console } from "@woowacourse/mission-utils";
import { Computer } from "./Computer.js";
import { MESSAGE } from "../constants/messages.js";
import { player } from "./Player.js";

export class Game {
  async startNewGame() {
    const completed = await this.#play();
    if (completed) {
      const replay = await player.selectReplayOrExit();

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
}
