import Judge from "./Judge.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.judge = new Judge(this);
    this.Computer = this.judge.randomNumber();
    this.PLAYER_ON = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.PLAYER_ON = true;

    while (this.PLAYER_ON) {
      const me = await this.judge.validNumber();
      const result = this.judge.compareScore({ me, com: this.Computer });

      if (result?.state === "LOSE") {
        this.PLAYER_ON = true;
      }
      if (result === "WIN") {
        await this.judge.gameStatus();
      }
    }
  }
}

new App().play();

export default App;
