import { Console } from '@woowacourse/mission-utils';

async function Input() {
	let answer;
	let answerArr = [];

	answer = await Console.readLineAsync('숫자를 입력해주세요 : ');
	answerArr = [Number(answer[0]), Number(answer[1]), Number(answer[2])];

	if (answer.length !== 3) {
		throw new Error('[ERROR]');
	}
	if (answerArr[0] === answerArr[1] || answerArr[0] === answerArr[2] || answerArr[1] === answerArr[2]) {
		throw new Error('[ERROR]');
	}
	if (!Number.isInteger(answerArr[0]) || !Number.isInteger(answerArr[1]) || !Number.isInteger(answerArr[2])) {
		throw new Error('[ERROR]');
	}
	if (answerArr.includes(0)) {
		throw new Error('[ERROR]');
	}
	return answerArr;
}

export default Input;