import { Console, Random } from '@woowacourse/mission-utils';
import { COMMAND, GAME, ERROR } from './Constant.js';
class App {
	constructor() {
		this.mode = GAME.PLAYING;
	}
	showStartMessage() {
		Console.print(COMMAND.START);
	}
	generateRandomNumber() {
		const randomNumberList = [];
		while (randomNumberList.length < GAME.NUMBER_LENGTH) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!randomNumberList.includes(randomNumber))
				randomNumberList.push(randomNumber);
		}
		return randomNumberList.sort();
	}
	validUserInput(userInput) {
		if (userInput.length === 0) throw new Error(ERROR.NOT_INPUT);
		userInput.split('').forEach((number, index) => {
			if (isNaN(number)) {
				throw new Error(ERROR.NOT_A_NUMBER);
			}
			if (userInput.includes(number) && userInput.indexOf(number) !== index) {
				throw new Error(ERROR.DUPLICATED_NUMBER);
			}

			if (number < 1 || number > 9) {
				throw new Error(ERROR.INVALID_NUMBER);
			}

			if (userInput.length !== 3) {
				throw new Error(ERROR.NOT_INVALID_LENGTH);
			}
		});
		userInput = userInput.split('').map((number) => parseInt(number));
		return userInput;
	}
	countBall(answer, userInput) {
		let count = 0;
		userInput.forEach((number, index) => {
			if (answer.includes(number) && answer[index] !== number) {
				count++;
			}
		});
		return count;
	}
	countStrike(answer, userInput) {
		let count = 0;
		userInput.forEach((_, index) => {
			if (answer[index] === userInput[index]) {
				count++;
			}
		});
		return count;
	}
	checkGameStatus(answer, userInput) {
		const ball = this.countBall(answer, userInput);
		const strike = this.countStrike(answer, userInput);
		let message;
		if (strike === 3) {
			message = '3스트라이크';
			this.mode = GAME.FINISH;
		} else if (strike > 0 || ball > 0) {
			message =
				(ball > 0 ? `${ball}볼` : '') +
				(ball > 0 && strike > 0 ? ' ' : '') +
				(strike > 0 ? `${strike}스트라이크` : '');
		} else {
			message = '낫싱';
		}
		Console.print(message);
	}
	async userSelectRestart() {
		Console.print(COMMAND.END);
		const userSelectMenu = await Console.readLineAsync(COMMAND.RESTART);
		if (userSelectMenu === '1') {
			this.mode = GAME.PLAYING;
			this.gameStart();
		} else if (userSelectMenu === '2') {
			this.mode = GAME.FINISH;
			return;
		} else throw new Error(ERROR.INVALID_NUMBER);
	}
	async gameStart() {
		const answer = this.generateRandomNumber();
		while (this.mode !== GAME.FINISH) {
			let userInput = await Console.readLineAsync(COMMAND.INPUT);
			userInput = this.validUserInput(userInput);
			this.checkGameStatus(answer, userInput);
		}
		this.userSelectRestart();
	}
	async play() {
		this.showStartMessage();
		await this.gameStart();
	}
}
// const app = new App();
// app.play();
export default App;
