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
}
