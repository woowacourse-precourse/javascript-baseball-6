import { Console } from '@woowacourse/mission-utils';

class UserInput {
	async baseballInput(question = '숫자를 입력해주세요 : ') {
		try {
			const userInput = await Console.readLineAsync(question);
			return userInput;
		} catch (err) {
			console.error(err);
		}
	}

	async gameEndInput(question = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n') {
		try {
			const userInput = await Console.readLineAsync(question);
			return userInput;
		} catch (err) {
			console.error(err);
		}
	}
}

export default UserInput;
