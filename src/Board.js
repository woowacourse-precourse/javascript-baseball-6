import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';
import Numbers from './Numbers';
import Feedback from './Feedback';

const LENGTH = 3;


class Board {

	_answer = null;
	_guesss = [];
	_feedbacks = [];

	constructor() {
		//this._setAnswer();
	}

	_setAnswer() {
		let numbers = []
		while (numbers.length < LENGTH) {
			const number = Random.pickNumberInRange(1, 9);
			if (!numbers.includes(number)) {
				numbers.push(number);
			}
		}
		this._answer = new Numbers(numbers.join(''));
	}

	async getUserGuess() {
		const input = await Console.readLineAsync(Strings.REQUEST);
		this._guesss.push(new Numbers(input));
	}

	checkUserGuess() {
		let [balls, strikes] = this._answer.compare(this._guesss.at(-1));
		this._feedbacks.push(new Feedback(balls, strikes));
	}

	printFeedback() {
		this._feedbacks.at(-1).print();
	}

	isCorrectAnswer() {
		return LENGTH !== this._feedbacks.at(-1).getStrikes();
	}
}

export default Board;
