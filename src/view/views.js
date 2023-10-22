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
      resultMesage = resultMesage.concat(String(result.BALL) + Mesage.BALL + ' ');
    }
  
    if (result.STRIKE !== 0) {
      resultMesage = resultMesage.concat(String(result.STRIKE) + Mesage.STRIKE + ' ');
    }

    return Console.print(resultMESSAGE);
  }
  
  printMessage(message) {
    return Console.print(message);
  }

  async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}