import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import print from "./utils.js";

class App {
  playAgain = true;

  doNotPlayAgain() {
    this.playAgain = false;
  }

  async play() {
    while (this.playAgain) {
      this.game = new Game();
      await this.game.start();

      const USER_INPUT = await MissionUtils.Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n"
      );

      if (USER_INPUT === "2") this.doNotPlayAgain();
    }
  }
}

export default App;
