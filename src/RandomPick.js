import { Random } from '@woowacourse/mission-utils';

function RandomPick() {
	const correctAnswer = [];
	
	while (correctAnswer.length < 3) {
		const number = Random.pickNumberInRange(1, 9);
		if (!correctAnswer.includes(number)) {
			correctAnswer.push(number);
		}
	}
	
	return correctAnswer;
}

export default RandomPick;