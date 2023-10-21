const { Console, Random } = require('@woowacourse/mission-utils');
const Numbers = require('./Numbers');
const Feedback = require('./Feedback');
const LENGTH = 3;


class Board {

	_answer = null;
	_guess = null;
	_feedback = null;

	constructor() {
		this._setAnswer();
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

	getUserGuess() {
		/* TEST:
		Console.readLine('', (input) => {
			this._guess = new Numbers(input);
		});
		*/

		// TEST:
		this.guess = new Numbers('123');
	}

	checkUserGuess() {
		let [balls, strikes] = this._answer.compare(this._guess);
		this._feedback = new Feedback(balls, strikes);
	}

	printFeedback() {
		this._feedback.print();
	}
}

module.exports = Board;


// TEST: 볼, 스트라이크 카운팅 및 피드백 생성
const board = new Board();
board._answer = new Numbers('123');
board._guess = new Numbers('789');
console.log('board._answer :>> ', board._answer);

// b1, b1, b1, b2, b2, b2, b3
// s1, s1, s1, s2, s2, s2, s3
// 2b1s, s2, 2b1s
input = ['289', '819', '892', '219', '391', '932', '231',
	'189', '829', '893', '129', '193', '923', '123',
	'132', '193', '213']

for (let i = 0; i < input.length; i++) {
	board._guess._value = input[i]
	board.checkUserGuess();
	board.printFeedback();
}
//////////////////////////////////////////////