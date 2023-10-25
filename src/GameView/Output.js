import { Console } from "@woowacourse/mission-utils";
import { GAME } from "../utils/Constants.js";

class Output {
  printStartGame() {
    Console.print(GAME.START);
  }

  printSuccess() {
    Console.print(GAME.THREE_STRIKES);
    Console.print(GAME.SUCCESS);
  }

  printHint(strikes, balls) {
    if (strikes === 0 && balls === 0) {
      Console.print(GAME.NOTHING);
    } else {
      Console.print(`${balls}${GAME.BALL} ${strikes}${GAME.STRIKE}`);
    }
  }

  printRestartGame() {
    Console.print(GAME.RESTART);
  }
}
export default Output;
