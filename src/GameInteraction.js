import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './Messages.js';

class GameInteraction {
  static async inputUserNumbers() {
    try {
      const userNumbers = await Console.readLineAsync(MESSAGES.INPUT_NUM);
      this.validateUserNumbers(userNumbers);
      return userNumbers;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static validateUserNumbers(input) {
    const userNumbersArray = Array.from(input).map(Number);

    if (userNumbersArray.some((number) => Number.isNaN(number))) {
      throw new Error(MESSAGES.ERR_INVALID_NUM);
    }

    if (userNumbersArray.length !== 3) {
      throw new Error(MESSAGES.ERR_NOT_THREE_NUM);
    }

    if (userNumbersArray.some((number) => number < 1 || number > 9)) {
      throw new Error(MESSAGES.ERR_OUT_OF_RANGE_NUM);
    }

    const uniqueNumbers = new Set(userNumbersArray);
    if (uniqueNumbers.size !== 3) {
      throw new Error(MESSAGES.ERR_DUPLICATE_NUM);
    }

    return null;
  }

  static printResult(result) {
    const { ball, strike } = result;

    if (ball === 0 && strike === 0) {
      Console.print(MESSAGES.MSG_NOTHING);
    } else if (strike > 0 && ball === 0) {
      Console.print(strike + MESSAGES.MSG_STRIKE);
    } else if (strike === 0) {
      Console.print(ball + MESSAGES.MSG_BALL);
    } else {
      Console.print(`${ball + MESSAGES.MSG_BALL} ${strike}${MESSAGES.MSG_STRIKE}`);
    }
  }

  static async askToRestartGame() {
    try {
      const answer = await Console.readLineAsync(`${MESSAGES.INPUT_MENU}\n`);
      this.validateAnswer(answer);
      return answer;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static validateAnswer(answer) {
    if (answer !== '1' && answer !== '2') {
      throw new Error(MESSAGES.ERR_INVALID_MENU);
    }
    return null;
  }
}

export default GameInteraction;
