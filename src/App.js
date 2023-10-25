import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import { getContinueGame, getNumber } from "./getInput.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let play = true;
    let game = new Game();

    while (play) {
      const numbers = await getNumber();
      const result = game.checkNumbers(numbers);
      if (result) {
        let restart = await getContinueGame();
        if (restart === "1") {
          game = new Game();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
