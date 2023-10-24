import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../Messages';

const InputView = {
  async readNumber() {
    const userInput = await Console.readLineAsync(MESSAGES.numberQuery);
    return Array.from(userInput, Number);
  },
  async readRetry() {
    return Number(await Console.readLineAsync(MESSAGES.restartQuery));
  },
};

export default InputView;
