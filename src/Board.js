const { Console, Random } = require('@woowacourse/mission-utils');
const Numbers = require('./Numbers');

class Board {

	_answer = null;
	_guess = null;
	_feedback = null;

	constructor() {
		this._setAnswer();
	}

	_setAnswer() {
		let numbers = []
		while (numbers.length < 3) {
			const number = Random.pickNumberInRange(1, 9);
			if (!numbers.includes(number)) {
				numbers.push(number);
			}
		}
		this._answer = new Numbers(numbers.join(''));
	}

	getUserGuess() {
		Console.readLine('', (input) => {
			this._guess = new Numbers(input);
		});
	}

	checkUserGuess() {
		console.log("Board.js/Board/checkUserGuess");
	}

	printFeedback() {
		console.log("Board.js/Board/printFeedback");
	}
}

module.exports = Board;