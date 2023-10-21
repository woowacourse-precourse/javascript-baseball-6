import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js'

export default class views{
  constructor() {
    Console.print(MESSAGE.START);
  }

  correct() {
    Console.print(MESSAGE.CORRECT);
  }

  result(result) {
    Console.print(this.makeResultMessage(result));
  }

  makeResultMessage(result) {
    let resultMESSAGE = '';
  
    if (result.NOTHING === true) {
      resultMESSAGE = resultMESSAGE.concat(MESSAGE.NOTHING);
      return resultMESSAGE;
    }
  
    if (result.BALL !== 0) {
      resultMESSAGE = resultMESSAGE.concat(String(result.BALL) + MESSAGE.BALL + ' ');
    }
  
    if (result.STRIKE !== 0) {
      resultMESSAGE = resultMESSAGE.concat(String(result.STRIKE) + MESSAGE.STRIKE + ' ');
    }
    
    return resultMESSAGE;
  }
}