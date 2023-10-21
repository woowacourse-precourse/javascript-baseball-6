import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import Validation from "./Validation.js";

class GameLifecycleManager {
  constructor() {
    this.isGameEnded = false;
  }

  startGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  async playGame() {
    const game = new Game();
    await game.play();
  }

  async promptNewGameOrExit() {
    let userResponse = await Console.readLineAsync(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
    userResponse = userResponse.trim();
    Validation.validateGameTerminationInput(userResponse);

    if (userResponse === "2") {
      Console.print("게임을 종료합니다.");
      this.isGameEnded = true;
    }
  }

  async manageGameLifecycle() {
    this.startGame();

    while (!this.isGameEnded) {
      await this.playGame();
      await this.promptNewGameOrExit();
    }
  }
}

export default GameLifecycleManager;
