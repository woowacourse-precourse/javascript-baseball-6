import Game from "./Game.js";
import { GameMessages } from "./Messages.js";
import { RUN_GAME, END_GAME } from "./GameState.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  #gameState;

  constructor() {
    this.#gameState = RUN_GAME;
  }

  async play() {
    this.printMessage(GameMessages.GAME_START);
    while (this.#gameState != END_GAME) {
      const game = new Game();
      await game.runGame();
      await this.restartOrEndApp();
    }
    this.printMessage(GameMessages.GAME_END);
  }

  printMessage(message) {
    Console.print(message);
  }

  async restartOrEndApp() {
    this.#gameState = await Console.readLineAsync(
      GameMessages.ALL_PASS + "\n" + GameMessages.AKS_REGAME + "\n"
    );
  }
}

// const test = new App();
// await test.play();

export default App;
