import { Console } from '@woowacourse/mission-utils';
export default async function ResponseGameRestart() {
	try {
		const answer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
		if (answer !== '1' && answer !== '2') {
			throw { name: 'InputValueError', message: '1과 2외의 다른 값을 입력했습니다.' };
		}
		return answer;
	} catch (error) {
		Console.print(`[ERROR] ${error.message}`);
	}
}
