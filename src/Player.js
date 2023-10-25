import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

const INPUT_PROMPT = {
  NUMBER: '숫자를 입력해주세요 : ',
  END_OPTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class Player {
  async getNumber() {
    try {
      const number = await Console.readLineAsync(INPUT_PROMPT.NUMBER);

      if (Validator.checkValidation(number)) {
        return number.split('').map(Number);
      }
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
    return [];
  }

  async getEndOption() {
    const endOption = await Console.readLineAsync(INPUT_PROMPT.END_OPTION);

    if (Validator.checkEndOptionValidation(endOption)) {
      return endOption;
    }
  }
}

export default Player;
