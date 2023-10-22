import Game from "./GameControl.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game = new Game(this);
    this.isPlaying = false;
    this.userNum = "";
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.isPlaying = true;
    const data = {};
    let result;

    while (this.isPlaying) {
      data["me"] = await this.game.numberValidChk();
      data["com"] = await this.game.randomNum();

      result = await this.game.isNumber_Same(data);

      if (result === "FAIL") {
        data["me"] = await this.game.numberValidChk();
        result = await this.game.isNumber_Same(data);
      }
      if (result === "WIN") {
        await this.game.newGameSwitch();
      }
    }
  }
}

new App().play();

export default App;
