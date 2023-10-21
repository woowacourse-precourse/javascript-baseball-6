import { Console } from '@woowacourse/mission-utils';
import ErrorCheck from './ErrorCheck.js';

class Pipe {
  static async listPipe() {
    let inputString = await Console.readLineAsync('숫자를 입력해주세요 : ')
      .catch(ErrorCheck.consoleErrorThrow);
    ErrorCheck.listStringCheck(inputString);
    return inputString.split("").map(Number);
  }

  static async retryPipe() {
    let inputString = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    ErrorCheck.retryStringCheck(inputString);
    if (inputString.charCodeAt(0) == 49) return true;
    if (inputString.charCodeAt(0) == 50) return false;
  }
}

export default Pipe;