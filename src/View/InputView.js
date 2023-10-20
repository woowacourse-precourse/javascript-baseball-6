import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async getUserNumber() {
    try {
      return await Console.readLineAsync('숫자를 입력해주세요 : ');
    } catch (error) {
      console.log('getUserNumber Error', error);
    }
  },
};

export default InputView;
