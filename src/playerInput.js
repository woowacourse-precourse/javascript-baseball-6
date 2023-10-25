import { Console } from '@woowacourse/mission-utils';

export default async function playerInput() {
	try {
		const ANSWER = await Console.readLineAsync('숫자를 입력해주세요 : ');
		if (ANSWER.includes('0')) {
			throw new Error('[ERROR] 입력한 값에 0이 포함되어 있습니다.');
		} else if (!Boolean(Number(ANSWER))) {
			throw new Error('[ERROR] 숫자를 입력하지 않았습니다.');
		} else if (!Number.isInteger(Number(ANSWER))) {
			throw new Error('[ERROR] 정수를 입력하지 않았습니다.');
		} else if (Number(ANSWER) < 0) {
			throw new Error('[ERROR] 양수를 입력하지 않았습니다.');
		} else if (ANSWER.length !== 3) {
			throw new Error('[ERROR] 3자리를 입력하지 않았습니다.');
		} else if (ANSWER[0] === ANSWER[1] || ANSWER[0] === ANSWER[2] || ANSWER[1] === ANSWER[2]) {
			throw new Error('[ERROR] 중복된 숫자를 입력했습니다.');
		} else {
			return ANSWER;
		}
	} catch (error) {
		Console.print(`${error.message}`);
		throw error;
	}
}
