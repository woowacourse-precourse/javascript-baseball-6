import Game from "./GameControl.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.game = new Game(this);
    this.isPlaying = false;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.isPlaying = true;
    const data = {};
    let result;

    while (this.isPlaying) {
      data["me"] = await this.game.numberValidChk();

      // 성공, 실패여부에 따른 Computer 숫자변경 분기
      if (result?.state === "FAIL") {
        data["com"] = result.com;
      } else {
        data["com"] = await this.game.randomNum();
      }

      result = this.game.isNumber_Same(data);

      if (result.state === "FAIL") {
        this.isPlaying = true;
      }

      if (result === "WIN") {
        await this.game.newGameSwitch();
      }
    }
  }
}

new App().play();

export default App;
