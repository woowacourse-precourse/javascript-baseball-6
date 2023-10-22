import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

export default class player {

  #_userNumber;

  async inputNumber() {
    const userInput = await Console.readLineAsync(MESSAGE.INPUT);
    
    if (this.isValidNumber(userInput)) {
      this.#_userNumber = userInput.split('').map((num) => Number(num));
    }
    return;
  }

  getJudgeResultPaper(opponent) {
    const result = opponent.judgeResult(this.#_userNumber);
    return result;
  }

  isValidNumber(userInput) {
    const userInputToArray = userInput.split('').map((num) => Number(num));
    
    if (userInputToArray.includes(0)) {
      throw new Error(MESSAGE.ERROR);
    }
    
    if (userInputToArray.length !== 3) {
      throw new Error(MESSAGE.ERROR);
    }
    
    if (this.hasDuplicates(userInputToArray)) {
      throw new Error(MESSAGE.ERROR);
    }

    return true;
  }

  hasDuplicates(userNumber) {
    for (let i = 0; i < userNumber.length; i++) {
      if (userNumber.includes(userNumber[i], i + 1)) {
        return true;
      }
    }
    return false;
  }
}