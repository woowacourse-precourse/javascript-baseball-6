import { MissionUtils } from '@woowacourse/mission-utils';
import ErrorHandler from  './Error.js';

class User {
  constructor() {
    this.error = new ErrorHandler;
  }

  async progressInput() {
    const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    this.error.baseballNumberCheck(userInput);
    return userInput;
  }

  async resetInput() {
    const userInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    this.error.resetNumberCheck(userInput);
    return userInput;
  }
}

export default User;