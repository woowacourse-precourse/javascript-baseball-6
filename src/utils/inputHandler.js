import MESSAGE from '../constants/messages.js';
import { Console } from '@woowacourse/mission-utils';

const InputHandler = {
  async userInput() {
    const num = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    Console.print('여긴?');

    return num;
  },
  async inputRestartNumber() {
    const num = await Console.readLineAsync(MESSAGE.GAME.END);

    return num;
  },
};

export default InputHandler;
