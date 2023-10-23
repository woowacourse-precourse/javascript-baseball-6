import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";
import Validation from "./Validation.js";
import { GAME_MESSAGES, COMMANDS } from "./constants.js";

class GameLifecycleManager {
  constructor() {
    this.isGameEnded = false;
  }

  startGame() {
    Console.print(GAME_MESSAGES.START);
  }

  async playGame() {
    const game = new Game();
    await game.play();
  }

  async promptNewGameOrExit() {
    let userResponse = await Console.readLineAsync(
      GAME_MESSAGES.ENTER_RESTART_OR_QUIT
    );
    userResponse = userResponse.trim();
    Validation.validateGameTerminationInput(userResponse);

    if (userResponse === COMMANDS.EXIT) {
      Console.print(GAME_MESSAGES.EXIT);
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
