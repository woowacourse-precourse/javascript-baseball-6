import { Console } from "@woowacourse/mission-utils";
import ClassInstance from "./ClassInstance.js";
import Computer from "./utils/Computer.js";
import Hint from "./utils/Hint.js";
import Validator from "./utils/Validator.js";
import Restart from "./utils/Restart.js";

class Game {
  async playGame() {
    const computer = new Computer();
    const hint = new Hint();
    const validator = new Validator();
    const restart = new Restart();

    let answer = await computer.getNumber(1, 9);
    let isContinue = true;

    while (isContinue) {
      let input = await Console.readLineAsync("숫자를 입력해주세요: ");
      let inputArr = Array.from(String(input), Number);
      let isValidated = await validator.validate(inputArr);
      if (!isValidated) {
        throw new Error("[ERROR]");
      }
      const result = await hint.getHint(inputArr, answer);
      Console.print(result);
      if (result === "3스트라이크") isContinue = false;
    }
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    let isRestart = await restart.restart();
    return isRestart;
  }
}
class App {
  async play() {
    const game = new Game();

    console.log("숫자 야구 게임을 시작합니다.");
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
