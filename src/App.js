import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/constants.js';
import { get3DigitRandom } from './utils/get3DigitRandom.js';
import { validateInput } from './utils/validateInput.js';
import { getBallsAndStrikes } from './utils/getBallsAndStrikes.js';
import { printResult } from './utils/printResult.js';
class App {
  async play() {
    MissionUtils.Console.print(PROMPT.START_GAME);

    const computer = get3DigitRandom();
    let baseball = { ball: 0, strike: 0 };
    while (baseball['strike'] < 3) {
      let user = await MissionUtils.Console.readLineAsync(PROMPT.INPUT_NUMBER);
      user = user.toString();
      const LEN = user.length;

      validateInput(user, LEN);
      baseball = getBallsAndStrikes(computer, user, baseball);
      printResult(baseball['ball'], baseball['strike']);
    }
  }
}

export default App;
