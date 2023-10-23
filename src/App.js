import Game from "./GameControl.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game = new Game(this);
    this.Computer = this.game.randomNum();
    this.isPlaying = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.isPlaying = true;
    let result;

    const GAME_INPUT = {};

    while (this.isPlaying) {
      GAME_INPUT["me"] = await this.game.numberValidChk();
      GAME_INPUT["com"] = this.Computer;

      // 성공, 실패여부에 따른 Computer 숫자변경 분기
      // if (result?.state === "FAIL") {
      //   GAME_INPUT["com"] = result.com;
      // } else {
      //   GAME_INPUT["com"] = await this.game.randomNum();
      // }

      result = this.game.getComparisonBall(GAME_INPUT);

      if (result?.state === "FAIL") {
        this.isPlaying = true;
      }
      if (result === "WIN") {
        await this.game.handleGameStatus();
      }
    }
  }
}

new App().play();

export default App;
