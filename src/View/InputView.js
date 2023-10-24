import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumber() {
    try {
      return await Console.readLineAsync('숫자를 입력해주세요 : ');
    } catch (error) {
      throw error;
    }
  },

  async confirmContinue() {
    try {
      return await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
