import { Console } from '@woowacourse/mission-utils';

function Exception(name, message) {
	this.name = name;
	this.message = message;
}

// export default async function PlayerInputNumber() {
// 	new Promise((resolve, reject) => {
// 		Console.readLine('숫자를 입력해주세요 : ', (answer) => {
// 			if (!Boolean(Number(answer))) {
// 				// throw { name: 'NotANumber', message: '숫자를 입력하지 않았습니다.' };
// 				reject(new Error('숫자를 입력하지 않았습니다.'));
// 			}
// 			if (!Number.isInteger(Number(answer))) {
// 				reject(new Error('정수를 입력하지 않았습니다.'));
// 			}
// 			if (Number(answer) < 0) {
// 				throw new Error('양수를 입력하지 않았습니다.');
// 			}
// 			if (answer.length !== 3) {
// 				throw new Error('3자리를 입력하지 않았습니다.');
// 			}
// 			if (answer.includes('0')) {
// 				throw new Error('입력한 값에 0이 포함되어 있습니다.');
// 			}
// 			resolve(() => {
// 				return answer;
// 			});
// 		});
// 	}).catch((error) => {
// 		console.log(`[ERROR] ${error.message}`);
// 	});
// }
export default async function PlayerInputNumber() {
	try {
		const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');

		if (!Boolean(Number(answer))) {
			// throw { name: 'NotANumber', message: '숫자를 입력하지 않았습니다.' };
			throw new Exception('NotANumber', '숫자를 입력하지 않았습니다.');
		}
		if (!Number.isInteger(Number(answer))) {
			throw new Exception('NotAnInteger', '정수를 입력하지 않았습니다.');
		}
		if (Number(answer) < 0) {
			throw new Exception('NotPositiveNumber', '양수를 입력하지 않았습니다.');
		}
		if (answer.length !== 3) {
			throw new Exception('LengthNotMath', '3자리를 입력하지 않았습니다.');
		}
		if (answer.includes('0')) {
			throw new Exception('ContainsZero', '입력한 값에 0이 포함되어 있습니다.');
		}
		return answer;
	} catch (error) {
		console.log(`[ERROR] ${error.message}`);
		throw error;
	}
}
