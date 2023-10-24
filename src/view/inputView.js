import { Console } from '@woowacourse/mission-utils';
import MainValidation from '../validation/MainValidation.js';
import RestartValidation from '../validation/RestartValidation.js';
import MESSAGE from '../constant/MESSAGE.js';

const inputView = {
  async readPlayerNum() {
    const input = await Console.readLineAsync(MESSAGE.num_input);
    new MainValidation(input.split('').map(Number));
    return input;
  },

  async readRestartEnd() {
    const input = await Console.readLineAsync(MESSAGE.restart);
    new RestartValidation(input);
    return input;
  },
};

export default inputView;
