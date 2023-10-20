import { Console } from "@woowacourse/mission-utils";
import generateNum from "./functions/generateNum.js";
import throwBall from "./functions/throwBall.js";
import askReplayAsync from "./functions/askReplayAsync.js";
import printResult from "./functions/printResult.js";

class App {
  async playOneGame() {
    const computerNum = generateNum({ length: 3 });

    while (true) {
      const userStr = await Console.readLineAsync("숫자를 입력해주세요 : ");
      const userNum = Array.from(userStr, Number);
      // Todo. userNum 유효성 검사

      const result = throwBall({
        dest: computerNum,
        src: userNum,
      });

      printResult(result);

      if (result.strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const replay = await askReplayAsync(
          "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        return replay;
      }
    }
  }
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    let isFinish = false;
    while (!isFinish) {
      isFinish = await this.playOneGame();
    }
  }
}

// const app = new App();
// app.play();

export default App;
