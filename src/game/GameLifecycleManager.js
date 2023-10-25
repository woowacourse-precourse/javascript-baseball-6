import Game from "./Game.js";
import IOManager from "./IOManager.js";
import { COMMANDS } from "./constants.js";

class GameLifecycleManager {
  constructor() {
    this.ioManager = new IOManager();
    this.isEntireGameComplete = false;
  }

  startGame() {
    this.ioManager.printGameStartMessage();
  }

  async playGame() {
    const game = new Game();
    await game.play();
  }

  async handleNewGameOrExit() {
    const userInput = await this.ioManager.getEndCommandInput();

    if (userInput === COMMANDS.EXIT) {
      this.isEntireGameComplete = true;
      this.ioManager.printGameExitMessage();
    }
  }

  async manageGameLifecycle() {
    this.startGame();
    while (!this.isEntireGameComplete) {
      await this.playGame();
      await this.handleNewGameOrExit();
    }
  }
}

export default GameLifecycleManager;
