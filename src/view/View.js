import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

export default class View {
  static printResultMessage(result) {
    if (result.ball === 0 && result.strike === 0) {
      return Console.print(MESSAGE.nothing);
    }

    let resultMessage = '';

    if (result.ball !== 0) {
      resultMessage = `${result.ball}${MESSAGE.ball} `;
    }

    if (result.strike !== 0) {
      resultMessage = `${resultMessage}${result.strike}${MESSAGE.strike} `;
    }

    return Console.print(resultMessage);
  }

  static printMessage(message) {
    return Console.print(message);
  }

  static async readInput(message) {
    const input = await Console.readLineAsync(message);
    return input;
  }
}
