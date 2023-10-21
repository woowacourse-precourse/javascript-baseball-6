import { Console } from "@woowacourse/mission-utils";
import { Game, GameTerminator } from "./game/index.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    const gameTerminator = new GameTerminator();
    let isGameEnded = false;

    while (!isGameEnded) {
      const game = new Game();
      await game.play();

      isGameEnded = await gameTerminator.promptNewGameOrExit();
    }
  }
}

export default App;
