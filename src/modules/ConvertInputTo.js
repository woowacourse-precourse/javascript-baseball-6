import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';
import Is from './Is.js';

class ConvertInputTo {
  static async list() {
    const inputString = await Console.readLineAsync('숫자를 입력해주세요 : ')
      .catch(ErrorCheck.otherErrorFormat);
    ErrorCheck.listString(inputString);
    return [...inputString].map(Number);
  }

  static async tryAgain() {
    const inputString = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    ).catch(ErrorCheck.otherErrorFormat);
    ErrorCheck.tryAgain(inputString);
    return Is.tryAgainBy(inputString);
  }
}

export default ConvertInputTo;