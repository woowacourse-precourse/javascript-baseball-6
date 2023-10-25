import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import { getContinueGame, getNumber } from "./getInput.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let game = new Game();

    while (1) {
      const User = await getNumber();
      const RESULT = game.checkNumbers(User);
      if (RESULT) {
        const RESULT = await getContinueGame();
        if (RESULT === "1") {
          game = new Game();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
