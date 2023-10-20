import { Console } from "@woowacourse/mission-utils";
import generateNum from "./functions/generateNum.js";
import throwBall from "./functions/throwBall.js";
import askReplayAsync from "./functions/askReplayAsync.js";
import askUserNumAsync from "./functions/askUserNumAsync.js";
import printResult from "./functions/printResult.js";
import { MESSAGE } from "./constant/message.js";

class App {
  async playOneGame() {
    const computerNum = generateNum({ length: 3 });

    while (true) {
      const userNum = await askUserNumAsync(MESSAGE.INPUT_NUM);
      // Todo. userNum 유효성 검사

      const result = throwBall({
        dest: computerNum,
        src: userNum,
      });
      printResult(result);

      if (result.strike === 3) {
        Console.print(MESSAGE.CORRECT);
        const replay = await askReplayAsync(MESSAGE.INPUT_REPLAY);
        return replay;
      }
    }
  }
  async play() {
    Console.print(MESSAGE.GAME_START);

    let isFinish = false;
    while (!isFinish) {
      isFinish = await this.playOneGame();
    }
  }
}

// const app = new App();
// app.play();

export default App;
