import { Console } from "@woowacourse/mission-utils";
import Computer from "./utils/Computer.js";
import Hint from "./utils/Hint.js";
import Validator from "./utils/Validator.js";
import Restart from "./utils/Restart.js";
import { CONSOLE_MESSAGE, HINT_TYPE } from "./Constants.js";

class Game {
  async playGame() {
    const computer = new Computer();
    const hint = new Hint();
    const validator = new Validator();
    const restart = new Restart();

    const answer = await computer.getNumber(1, 9);
    let isContinue = true;

    while (isContinue) {
      const input = await Console.readLineAsync(CONSOLE_MESSAGE.INPUT_MESSAGE);
      const inputArr = Array.from(String(input), Number);
      validator.validate(inputArr);

      const result = await hint.getHint(inputArr, answer);
      Console.print(result);
      if (result === `3${HINT_TYPE.STRIKE}`) isContinue = false;
    }
    console.log(
      `${CONSOLE_MESSAGE.GAME_COMPLETE} ${CONSOLE_MESSAGE.CLOSE_THE_GAME}`
    );
    let isRestart = await restart.restart();
    return isRestart;
  }
}
class App {
  async play() {
    const game = new Game();
    console.log(CONSOLE_MESSAGE.START_MESSAGE);

    let isRestart = await game.playGame();
    while (isRestart) {
      isRestart = await game.playGame();
    }
    Console.print(CONSOLE_MESSAGE.CLOSE_THE_GAME);
  }
}
const app = new App();
app.play();

export default App;
