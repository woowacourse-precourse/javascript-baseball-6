import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

const Input = {
  async getNumber() {
    try {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : ');
      if (Validate.checkValidNumber(number)) {
        return number.split('').map(Number);
      }
    } catch (error) {
      Console.print('[ERROR] ' + error.message);
    }
  },
  async getGameEnd() {
    try {
      const number = await Console.readLineAsync(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
      );
      if (Validate.isOneOrTwo(number)) {
        return number;
      }
    } catch (error) {
      Console.print('[ERROR] ' + error.message);
    }
  },
};

export default Input;
