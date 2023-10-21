import { Console } from "@woowacourse/mission-utils";
import readThreeDigitNum from "./functions/readThreeDigitNum.js";
import readReplayValue from "./functions/readReplayValue.js";
import generateNum from "./functions/generateNum.js";
import throwBall from "./functions/throwBall.js";
import printResult from "./functions/printResult.js";
import { MESSAGE } from "./constant/message.js";

class App {
  async playGameOnce() {
    const computerNum = generateNum({ length: 3 });
    let replay = false;

    while (true) {
      const userNum = await readThreeDigitNum(MESSAGE.INPUT_NUM);

      const result = throwBall({
        dest: computerNum,
        src: userNum,
      });

      printResult(result);

      if (result.strike === 3) {
        Console.print(MESSAGE.CORRECT);
        replay = await readReplayValue(MESSAGE.INPUT_REPLAY);
        break;
      }
    }

    return replay;
  }
  async play() {
    Console.print(MESSAGE.GAME_START);
    while (!(await this.playGameOnce()));
  }
}

const app = new App();
app.play();

export default App;
