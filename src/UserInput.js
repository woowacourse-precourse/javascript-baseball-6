import ERROR_MESSAGES from './constants/ERROR_MESSAGES';
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

	async baseballInput(question = '숫자를 입력해주세요 : ') {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkBaseballInputIsValid(userInput);

			return userInput;
		} catch (err) {
			throw new Error(err);
		}
	}

	async gameEndInput(question = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n') {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkGameEndInputIsValid(userInput);

			return userInput;
		} catch (err) {
			throw new Error(err);
		}
	}
}

export default UserInput;
