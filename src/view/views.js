import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js'

export default class views{
  constructor() {
    Console.print(MESSAGE.START);
  }

  printResultMessage(result) {
    
    if (result.BALL === 0 && result.STRIKE === 0) {
      return Console.print(MESSAGE.NOTHING);
    }

    let resultMessage = '';

    if (result.BALL !== 0) {
      resultMessage = resultMessage.concat(String(result.BALL) + MESSAGE.BALL + ' ');
    }
  
    if (result.STRIKE !== 0) {
      resultMessage = resultMessage.concat(String(result.STRIKE) + MESSAGE.STRIKE + ' ');
    }

    return Console.print(resultMessage);
  }
  
  printMessage(message) {
    return Console.print(message);
  }

  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}