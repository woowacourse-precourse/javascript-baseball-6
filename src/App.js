import { Console } from "@woowacourse/mission-utils";
import Computer from "./utils/Computer.js";
import Hint from "./utils/Hint.js";
import Validator from "./utils/Validator.js";
import Restart from "./utils/Restart.js";
import { CONSOLE_MESSAGE } from "./Constants.js";

class Game {
  async playGame() {
    const computer = new Computer();
    const hint = new Hint();
    const validator = new Validator();
    const restart = new Restart();

    let answer = await computer.getNumber(1, 9);
    let isContinue = true;

    while (isContinue) {
      let input = await Console.readLineAsync(CONSOLE_MESSAGE.START_MESSAGE);
      let inputArr = Array.from(String(input), Number);
      let isValidated = await validator.validate(inputArr);
      if (!isValidated) {
        throw new Error("[ERROR]");
      }
      const result = await hint.getHint(inputArr, answer);
      Console.print(result);
      if (result === `3${CONSOLE_MESSAGE.STRIKE}`) isContinue = false;
    }
    console.log(CONSOLE_MESSAGE.GAME_COMPLETE);
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
    Console.print("게임 종료");
  }
}
const app = new App();
app.play();

export default App;
