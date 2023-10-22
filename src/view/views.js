import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js'

export default class views{
  constructor() {
    Console.print(MESSAGE.START);
  }
  
  printMessage(message) {
    Console.print(message);
  }

  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}