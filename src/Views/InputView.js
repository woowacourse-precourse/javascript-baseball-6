import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../Messages';

const InputView = {
  async readNumber() {
    const userInput = await Console.readLineAsync(MESSAGES.numberQuery);
    return userInput.split('').map(Number);
  },
  async readRetry() {
    return Number(await Console.readLineAsync(MESSAGES.restartQuery));
  },
};

export default InputView;
