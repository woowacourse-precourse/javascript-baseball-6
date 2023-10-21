import { Console, Random } from '@woowacourse/mission-utils';
import Strings from './resources/Strings';
import Numbers from './Numbers';
import Feedback from './Feedback';

const LENGTH = 3;


class Board {

	/** @type {string} */
	_answer = null;

	_guesses = [];
	_feedbacks = [];

	/**
	 * 객체 생성 시, 임의의 정답을 생성한다.
	 */
	constructor() {
		this._setAnswer();
	}

	/**
	 * 임의의 정답을 생성한다.
	 */
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

	/**
	 * 사용자로부터 추측을 입력받는다.
	 */
	async getUserGuess() {
		const input = await Console.readLineAsync(Strings.REQUEST);
		this._guesses.push(new Numbers(input));
	}

	/**
	 * 사용자의 마지막 추측과 정답을 비교하여 피드백을 생성한다.
	 */
	checkUserGuess() {
		let [balls, strikes] = this._answer.compare(this._guesses.at(-1));
		this._feedbacks.push(new Feedback(balls, strikes));
	}

	/**
	 * 마지막으로 생성된 피드백을 출력한다.
	 */
	printFeedback() {
		this._feedbacks.at(-1).print();
	}

	/**
	 * 사용자의 정답 여부를 반환한다.
	 * @returns {boolean}
	 */
	isCorrectAnswer() {
		return LENGTH !== this._feedbacks.at(-1).getStrikes();
	}
}

export default Board;
