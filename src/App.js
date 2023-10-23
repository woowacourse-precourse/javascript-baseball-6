import { Console } from "@woowacourse/mission-utils";
import baseBallGame from "./baseBallGame.js";
import createRandomNumber from "./function/createRandomNumber.js";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const computerValue = createRandomNumber();

    return baseBallGame(computerValue);
  }
}

export default App;
