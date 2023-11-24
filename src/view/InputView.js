import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readNumbers() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.read.numbers);

    return Number(inputNumbers);
  },
};

export default InputView;
