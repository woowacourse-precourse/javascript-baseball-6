import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
class App {
  async play() {
    //await Console.print("숫자 야구 게임을 시작합니다.");
    while (true) {
      const game = new Game();

      await game.gameStart();

      if (game.isStart == "2") {
        Console.print("게임 종료");
        break;
      }
    }
  }
}

export default App;
