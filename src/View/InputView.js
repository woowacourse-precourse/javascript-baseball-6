import { Console } from '@woowacourse/mission-utils';

const INPUT_PLAYER_NUMBER_MESSAGE = '숫자를 입력해주세요 : ';
const INPUT_CONFIRM_NUMBER_MESSAGE = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.';

const InputView = {
  async getUserNumber() {
    try {
      return await Console.readLineAsync(INPUT_PLAYER_NUMBER_MESSAGE);
    } catch (error) {
      throw error;
    }
  },

  async confirmContinue() {
    try {
      return await Console.readLineAsync(INPUT_CONFIRM_NUMBER_MESSAGE);
    } catch (error) {
      throw error;
    }
  },
};

export default InputView;
