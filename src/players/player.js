import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

export default class player {

	#_userNumber;

	async inputNumber() {
		const userInput = await Console.readLineAsync(MESSAGE.INPUT);
		const isValid = this.isValidNumber(userInput);

		if (isValid){
			this.#_userNumber = userInput.split('').map((num) => Number(num));
		}

		return isValid
	}

	getJudgeResultPaper(opponent) {
		const result = opponent.judgeResult(this.#_userNumber);
		return result;
	}

	isValidNumber(userInput) {
		const userInputToArray = userInput.split('').map((num) => Number(num));
    let isValid = true;
	  
		if (userInputToArray.includes(0)) {
		  isValid = false;
		}
	  
		if (userInputToArray.length !== 3) {
		  isValid = false;
		}
	  
		if (this.hasDuplicates(userInputToArray)) {
		  isValid = false;
		}

	  return isValid
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
