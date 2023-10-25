import { Console } from '@woowacourse/mission-utils';

export default async function gameRestart() {
	try {
		const ANSWER = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
		if (ANSWER === '1' || ANSWER === '2') {
			return ANSWER;
		} else {
			throw new Error('[ERROR] 1과 2외의 다른 값을 입력했습니다.');
		}
	} catch (error) {
		Console.print(`${error.message}`);
		throw error;
	}
}
