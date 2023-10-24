import { Console } from '@woowacourse/mission-utils';

export default async function PlayerInputNumber() {
	try {
		const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');

		if (answer.includes('0')) {
			throw new Error('[ERROR] 입력한 값에 0이 포함되어 있습니다.');
		} else if (!Boolean(Number(answer))) {
			throw new Error('[ERROR] 숫자를 입력하지 않았습니다.');
		} else if (!Number.isInteger(Number(answer))) {
			throw new Error('[ERROR] 정수를 입력하지 않았습니다.');
		} else if (Number(answer) < 0) {
			throw new Error('[ERROR] 양수를 입력하지 않았습니다.');
		} else if (answer.length !== 3) {
			throw new Error('[ERROR] 3자리를 입력하지 않았습니다.');
		} else if (answer[0] === answer[1] || answer[0] === answer[2] || answer[1] === answer[2]) {
			throw new Error('[ERROR] 중복된 숫자를 입력했습니다.');
		} else {
			return answer;
		}
	} catch (error) {
		Console.print(`${error.message}`);
		throw error;
	}
}
