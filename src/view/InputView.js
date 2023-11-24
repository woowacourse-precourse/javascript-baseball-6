import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import NumbersValidator from '../validators/NumbersValidator.js';
import RestartValidator from '../validators/RestartValidator.js';

const InputView = {
  async readNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.read.numbers);
    NumbersValidator.validateNumbers(numbers);
    return Number(numbers);
  },

  async readRestart() {
    const restart = await Console.readLineAsync(MESSAGE.read.restart);
    RestartValidator.validateRestart(restart);
    return restart;
  },
};

export default InputView;
