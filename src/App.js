import { Console } from "@woowacourse/mission-utils";
import generateComputerNumber from "./generateComputerNumber.js";
import startGame from "./startGame.js";
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerNumber = generateComputerNumber();
    Console.print(computerNumber); //임시로 출력
    const flag = startGame(computerNumber);
    if (flag === -1) return;
  }
}

(() => {
  const app = new App();
  app.play();
})();

export default App;
