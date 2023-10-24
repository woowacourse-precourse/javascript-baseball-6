import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPT } from './constants/constants';
import getRandom from './utils/get3DigitRandom';
import validateInput from './utils/validateInput';
import getBaseball from './utils/getBallsAndStrikes';
import printResult from './utils/printResult';
class App {
  constructor() {
    this.baseball = { ball: 0, strike: 0 };
  }

  async play() {
    MissionUtils.Console.print(PROMPT.startGame);
    const computer = getRandom();
    while (this.baseball.strike < 3) {
      const user = String(
        await MissionUtils.Console.readLineAsync(PROMPT.inputNumber)
      );
      validateInput(user, user.length);
      this.baseball = getBaseball(computer, user, this.baseball);
      printResult(this.baseball.ball, this.baseball.strike);
    }
  }
}

export default App;
