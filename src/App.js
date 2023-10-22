import Game from "./Game.js";
import { Messages } from "./Messages.js";
import { RUNNING_GAME, RESTART_GAME, END_GAME } from "./GameState.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print(Messages.GAME_START);
    let gameState = RUNNING_GAME;
    while (gameState != 2) {
      try {
        const game = new Game();
        gameState = await game.runGame();
      } catch (e) {
        throw e;
      }
    }
    Console.print(Messages.GAME_END);
  }
}

// const test = new App();
// await test.play();

export default App;
