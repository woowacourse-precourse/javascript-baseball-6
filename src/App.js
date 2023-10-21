import { Console } from '@woowacourse/mission-utils';
import readThreeDigitNum from './functions/readThreeDigitNum.js';
import readReplayValue from './functions/readReplayValue.js';
import generateNum from './functions/generateNum.js';
import throwBall from './functions/throwBall.js';
import printResult from './functions/printResult.js';
import { MESSAGE } from './constant/message.js';

class App {
  async playGameOnce() {
    const computerNum = generateNum({ length: 3 });
    let replay = false;

    while (true) {
      const userNum = await readThreeDigitNum(MESSAGE.inputNum);

      const result = throwBall({
        dest: computerNum,
        src: userNum,
      });

      printResult(result);

      if (result.strike === 3) {
        Console.print(MESSAGE.correct);
        replay = await readReplayValue(MESSAGE.inputReplay);
        break;
      }
    }

    return replay;
  }
  async play() {
    Console.print(MESSAGE.startGame);
    while (!(await this.playGameOnce()));
  }
}

export default App;
