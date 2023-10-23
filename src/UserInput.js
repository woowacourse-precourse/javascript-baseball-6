import { Console } from '@woowacourse/mission-utils';

class UserInput {
	checkBaseballInputIsValid(userInput) {
		if (userInput.length !== 3) throw Error('[ERROR] 세 자리 수를 입력해주세요.');

		if (userInput.includes('0')) throw Error('[ERROR] 범위 내 숫자를 입력해주세요');

		const userInputNumber = Number(userInput);
		if (isNaN(userInputNumber)) throw Error('[ERROR] 숫자를 입력해주세요.');

		const userInputSet = new Set(userInput.split(''));
		if (userInput.length !== userInputSet.size)
			throw Error('[ERROR] 서로 다른 숫자를 입력해주세요');
	}

	checkGameEndInputIsValid(userInput) {
		if (userInput !== '1' && userInput !== '2') throw Error('[ERROR] 1 또는 2를 입력해주세요.');
	}

	async baseballInput(question = '숫자를 입력해주세요 : ') {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkBaseballInputIsValid(userInput);
			return userInput;
		} catch (err) {
			throw Error(err);
		}
	}

	async gameEndInput(question = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n') {
		try {
			const userInput = await Console.readLineAsync(question);
			this.checkGameEndInputIsValid(userInput);
			return userInput;
		} catch (err) {
			throw Error(err);
		}
	}
}

export default UserInput;
