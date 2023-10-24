import { Console } from "@woowacourse/mission-utils";
import ClassInstance from "./ClassInstance.js";

class Game {
  async playGame() {
    const c = new ClassInstance();
    let answer = await c.generateRandomNumber(1, 9);
    console.log(answer);
    let isContinue = true;

    while (isContinue) {
      let input = await Console.readLineAsync("숫자를 입력해주세요: ");
      let inputArr = Array.from(String(input), Number);
      let isValidated = await c.validator(inputArr);
      if (!isValidated) {
        throw new Error("[ERROR]");
      }
      const result = await c.checkGuess(inputArr, answer);
      Console.print(result);
      if (result === "3스트라이크") isContinue = false;
    }
    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    let isRestart = await c.restart();
    return isRestart;
  }
}
class App {
  async play() {
    const g = new Game();

    console.log("숫자 야구 게임을 시작합니다.");
    let isRestart = await g.playGame();
    while (isRestart) {
      isRestart = await g.playGame();
    }
    Console.print("게임 종료");
  }
}
const app = new App();
app.play();

export default App;
