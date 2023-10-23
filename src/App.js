import Game from "./Game.js";
import { Messages } from "./Messages.js";
import { RUN_GAME, END_GAME } from "./GameState.js";
import { Console, Random } from "@woowacourse/mission-utils";

class App {
  #gameState;

  constructor() {
    this.#gameState = RUN_GAME;
  }

  async play() {
    this.printMessage(Messages.GAME_START);
    while (this.#gameState != END_GAME) {
      try {
        const game = new Game();
        await game.runGame();
        await this.restartOrEndApp();
      } catch (e) {
        throw e;
      }
    }
    this.printMessage(Messages.GAME_END);
  }

  printMessage(message) {
    Console.print(message);
  }

  async restartOrEndApp() {
    this.#gameState = await Console.readLineAsync(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n" +
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
    );
  }
}

// const test = new App();
// await test.play();

export default App;
