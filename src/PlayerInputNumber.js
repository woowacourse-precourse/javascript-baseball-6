import { Console } from '@woowacourse/mission-utils';

export default async function PlayerInputNumber() {
	try {
		const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');

		if (!Boolean(Number(answer))) {
			throw { name: 'NotANumber', message: '숫자를 입력하지 않았습니다.' };
		}
		if (!Number.isInteger(Number(answer))) {
			throw { name: 'NotAnInteger', message: '정수를 입력하지 않았습니다.' };
		}
		if (answer.length !== 3) {
			throw { name: 'LengthNotMath', message: '3자리를 입력하지 않았습니다.' };
		}
		if (answer.includes('0')) {
			throw { name: 'ContainsZero', message: '입력한 값에 0이 포함되어 있습니다.' };
		}
	} catch (error) {
		console.log(`[ERROR] ${error.message}`);
	}
}
