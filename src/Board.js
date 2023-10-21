import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';
import Numbers from './Numbers';
import Feedback from './Feedback';

const LENGTH = 3;


class Board {

	_answer = null;
	_guess = null;
	_feedback = null;

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
		this._guess = new Numbers(input);
	}

	checkUserGuess() {
		let [balls, strikes] = this._answer.compare(this._guess);
		this._feedback = new Feedback(balls, strikes);
	}

	printFeedback() {
		this._feedback.print();
	}

	isCorrectAnswer() {
		return LENGTH !== this._feedback.getStrikes();
	}
}

export default Board;
