import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js'

export default class views{
  constructor() {
    Console.print(MESSAGE.start);
  }

  printResultMessage(result) {
    
    if (result.BALL === 0 && result.STRIKE === 0) {
      return Console.print(MESSAGE.nothing);
    }

    let resultMessage = '';

    if (result.BALL !== 0) {
      resultMessage = resultMessage.concat(String(result.ball) + MESSAGE.ball + ' ');
    }
  
    if (result.STRIKE !== 0) {
      resultMessage = resultMessage.concat(String(result.strike) + MESSAGE.strike + ' ');
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