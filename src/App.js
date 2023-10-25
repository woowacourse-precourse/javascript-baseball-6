import { randomNumber } from "./utils/randomNumber.js";
import { inputController } from "./action/inputController.js";
import { compareNumbers } from "./action/compareNumbers.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  async play() {
    const COMPUTER = randomNumber();
    while (true) {
      const USER = await inputController();
      const RESULT = await compareNumbers(COMPUTER, USER);

      if (RESULT === "1") {
        // 게임 재시작
        this.play();
        break;
      } else if (RESULT === "2") {
        // 게임종료
        break;
      }
    }
  }
}

export default App;
