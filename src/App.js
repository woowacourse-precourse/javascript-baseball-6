import { Console } from "@woowacourse/mission-utils";
import Game from "./game/Game.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let isGameEnded = false;

    while (!isGameEnded) {
      const game = new Game();
      await game.play();

      isGameEnded = await this.promptNewGameOrExit();
    }
  }

  async promptNewGameOrExit() {
    let userResponse = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    userResponse = userResponse.trim();

    if (userResponse.length !== 1) {
      throw new Error("[ERROR]");
    }

    if (isNaN(userResponse)) {
      throw new Error("[ERROR]");
    }

    if (userResponse === "1") {
      return false;
    }

    if (userResponse === "2") {
      Console.print("게임을 종료합니다.");
      return true;
    }

    return false;
  }
}

export default App;
