import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

export default class player {

  #userNumber;

  async inputNumber(view) {
    const userInput = await view.readInput(MESSAGE.input);
    
    if (this.isValidNumber(userInput)) {
      this.#userNumber = userInput.split('').map((num) => Number(num));
    }
    return;
  }

  getJudgeResultPaper(computer) {
    const result = computer.judgeResult(this.#userNumber);
    return result;
  }

  isValidNumber(userInput) {
    const userInputToArray = userInput.split('');
  
    if (userInputToArray.length !== 3) {
      throw new Error(MESSAGE.error);
    }
  
    if (userInputToArray.some(char => isNaN(Number(char)))) {
      throw new Error(MESSAGE.error);
    }
  
    const numericInput = userInputToArray.map((num) => Number(num));
  
    if (numericInput.includes(0)) {
      throw new Error(MESSAGE.error);
    }
  
    if (this.hasDuplicates(numericInput)) {
      throw new Error(MESSAGE.error);
    }
  
    return true;
  }
  
  hasDuplicates(userNumber) {
    const uniqueNumbers = new Set(userNumber);
    return uniqueNumbers.size !== userNumber.length;
  }
}
