import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import NumbersValidator from '../validators/NumbersValidator.js';

const InputView = {
  async readNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.read.numbers);
    NumbersValidator.validateNumbers(numbers);
    return Number(numbers);
  },
};

export default InputView;
