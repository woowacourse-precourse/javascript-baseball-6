import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
import ErrorHandler from './Error.js';

class User {
  constructor() {
    this.error = new ErrorHandler();
  }

  async progressInput() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.NUMBER_INPUT);
    this.error.baseballNumberCheck(userInput);
    return userInput;
  }

  async resetInput() {
    const userInput = await MissionUtils.Console.readLineAsync(MESSAGE.GAME_RESET);
    this.error.resetNumberCheck(userInput);
    return userInput;
  }
}

export default User;
