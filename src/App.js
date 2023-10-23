import Judge from "./Judge.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.judge = new Judge(this);
    this.Computer = this.judge.randomNumber();
    this.PlayerOn = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    this.PlayerOn = true;

    while (this.PlayerOn) {
      const me = await this.judge.validNumber();
      const result = this.judge.compareScore({ me, com: this.Computer });

      if (result?.state === "LOSE") {
        this.PlayerOn = true;
      }
      if (result === "WIN") {
        await this.judge.gameStatus();
      }
    }
  }
}

new App().play();

export default App;
