import { MissionUtils } from '@woowacourse/mission-utils';
import CreateRandomNumber from './RandomNumber/CreateRandomNumber.js';
import ValidateExceptions from './Validate/ValidateExceptions';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    try {
      const USER_NUMBER = await MissionUtils.Console.readLineAsync(
        '숫자를 입력해주세요 : '
      );
      const COMPUTER_NUMBER = CreateRandomNumber();

      ValidateExceptions(USER_NUMBER.split(''));
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
