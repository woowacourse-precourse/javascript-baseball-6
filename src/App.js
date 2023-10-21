import { Console } from "@woowacourse/mission-utils";
import generateNum from "./functions/generateNum.js";
import throwBall from "./functions/throwBall.js";
import askReplayAsync from "./functions/askReplayAsync.js";
import askUserNumAsync from "./functions/askUserNumAsync.js";
import printResult from "./functions/printResult.js";
import { MESSAGE } from "./constant/message.js";

class App {
  async playGameOnce() {
    const computerNum = generateNum({ length: 3 });
    let replay = false;

    while (true) {
      const userNum = await askUserNumAsync(MESSAGE.INPUT_NUM);

      const result = throwBall({
        dest: computerNum,
        src: userNum,
      });
      printResult(result);

      if (result.strike === 3) {
        Console.print(MESSAGE.CORRECT);
        replay = await askReplayAsync(MESSAGE.INPUT_REPLAY);
        break;
      }
    }

    return replay;
  }
  async play() {
    Console.print(MESSAGE.GAME_START);

    let isFinish = false;
    while (!isFinish) {
      isFinish = await this.playGameOnce();
    }
  }
}

const app = new App();
app.play();

export default App;
