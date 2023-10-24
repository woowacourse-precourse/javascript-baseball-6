import Game from "./GameControl.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game = new Game(this);
    this.Computer = this.game.randomNum();
    this.isPlaying = false;
  }

  async play() {
    this.isPlaying = true;
    let result;

    Console.print("숫자 야구 게임을 시작합니다.");

    const GAME_INPUT = {};

    while (this.isPlaying) {
      GAME_INPUT["me"] = await this.game.numberValidChk();
      GAME_INPUT["com"] = this.Computer;

      result = this.game.getComparisonResult(GAME_INPUT);

      if (result === "WIN") {
        await this.game.handleGameStatus();
      }
    }
  }
}

export default App;
