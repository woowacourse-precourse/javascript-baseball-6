import { MissionUtils } from '@woowacourse/mission-utils';
import CreateRandomNumber from './RandomNumber/CreateRandomNumber.js';
import ValidateExceptions from './Validate/ValidateExceptions.js';
import CompareNumber from './Compare/CompareNumber.js';
import Message from './Constants/Constant.js';

class App {
  async play() {
    MissionUtils.Console.print(Message.START);
    let isDone = false;

    while (!isDone) {
      const COMPUTER_NUMBER = CreateRandomNumber();

      let isWin = false;

      while (!isWin) {
        try {
          const USER_INPUT = await MissionUtils.Console.readLineAsync(
            Message.GET_NUMBER
          );

          ValidateExceptions(USER_INPUT.split(''));
          isWin = CompareNumber(COMPUTER_NUMBER, USER_INPUT.split(''));
        } catch (error) {
          throw new Error(error);
        }
      }
      MissionUtils.Console.print(Message.WIN);

      const RESTART_OR_END = await MissionUtils.Console.readLineAsync(
        Message.RESTART_END
      );

      if (RESTART_OR_END === '2') isDone = true;
    }
  }
}

export default App;
