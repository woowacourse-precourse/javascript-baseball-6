import { MESSAGE } from '../constants/constants.js';
import View from '../view/View.js';

export default class Player {
  async inputNumber() {
    const userInput = await View.readInput(MESSAGE.input);

    if (Player.isValidNumber(userInput)) {
      this._playerNumber = userInput.split('').map(num => parseInt(num, 10));
    }
  }

  getJudgeResult(computer) {
    const result = computer.judgeResult(this._playerNumber);
    return result;
  }

  static isValidNumber(userInput) {
    const userInputToArray = userInput.split('');

    if (userInputToArray.length !== 3) {
      throw new Error(MESSAGE.error);
    }

    if (userInputToArray.some(char => isNaN(parseInt(char, 10)))) {
      throw new Error(MESSAGE.error);
    }

    const numericInput = userInputToArray.map(num => parseInt(num, 10));

    if (numericInput.includes(0)) {
      throw new Error(MESSAGE.error);
    }

    if (Player.hasDuplicates(numericInput)) {
      throw new Error(MESSAGE.error);
    }

    return true;
  }

  static hasDuplicates(userNumber) {
    const uniqueNumbers = new Set(userNumber);
    return uniqueNumbers.size !== userNumber.length;
  }
}
