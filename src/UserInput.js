import ERROR_MESSAGES from './constants/ERROR_MESSAGES.js';
import SYSTEM_MESSAGES from './constants/SYSTEM_MESSAGES.js';
import { Console } from '@woowacourse/mission-utils';

class UserInput {
	checkBaseballInputIsValid(userInput) {
		const userInputNumber = Number(userInput);
		const userInputSet = new Set(userInput.split(''));

		if (userInput.length !== 3) throw new Error(ERROR_MESSAGES.INVALID_LENGTH_ERROR);

		if (userInput.includes('0')) throw new Error(ERROR_MESSAGES.INVALID_RANGE_ERROR);

		if (isNaN(userInputNumber)) throw new Error(ERROR_MESSAGES.NOT_A_NUMBER_ERROR);

		if (userInput.length !== userInputSet.size)
			throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER_ERROR);
	}

	checkGameEndInputIsValid(userInput) {
		if (userInput !== '1' && userInput !== '2')
			throw new Error(ERROR_MESSAGES.INVALID_CHOICE_ERROR);
	}

	async baseballInput(question = SYSTEM_MESSAGES.NUMBER_INPUT) {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkBaseballInputIsValid(userInput);

			return userInput;
		} catch (err) {
			throw new Error(err);
		}
	}

	async gameEndInput(question = SYSTEM_MESSAGES.GAME_RESTART) {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkGameEndInputIsValid(userInput);

			if (userInput === '1') return true;

			return false;
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default UserInput;
