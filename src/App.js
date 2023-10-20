import { Console } from "@woowacourse/mission-utils";
import generateComputerNumber from "./generateComputerNumber.js";
import startGame from "./startGame.js";
import handleExitInput from "./handleExitInput.js";
class App {
  constructor() {
    this.gameState = 1;
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    while (this.gameState) {
      const computerNumber = generateComputerNumber();
      this.gameState = await startGame(computerNumber);

      //TODO: 플래그 처리
      if (this.gameState === 0) {
        this.gameState = await handleExitInput();
      }
      if (this.gameState === -1) return;
    }
  }
}
export default App;
