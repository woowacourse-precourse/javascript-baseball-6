import { Console, Random } from '@woowacourse/mission-utils';
import { COMMAND, GAME } from './Constant.js';
class App {
	constructor() {
		this.mode = GAME.PLAYING;
	}
	async play() {
		this.showStartMessage();
		this.gameStart();
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
		if (userInput.length === 0)
			throw new Error('[ERROR] 입력이 되지 않았습니다.');
		userInput.split('').forEach((number, index) => {
			if (isNaN(number)) {
				throw new Error('[ERROR] 숫자가 아닙니다.');
			}
			if (userInput.includes(number) && userInput.indexOf(number) !== index) {
				throw new Error('[ERROR] 중복된 숫자가 있습니다.');
			}

			if (number < 1 || number > 9) {
				throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
			}

			if (userInput.length !== 3 || userInput.length === 0) {
				throw new Error('[ERROR] 세 글자 숫자가 아닙니다.');
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
		Console.print(ball);
		Console.print(strike);
		if (strike === 3) {
			message = '3스트라이크';
			this.mode = GAME.FINISH;
		} else if (strike > 0 || ball > 0) {
			message =
				(strike > 0 ? `${strike}스트라이크` : '') +
				(strike > 0 && ball > 0 ? ', ' : '') +
				(ball > 0 ? `${ball}볼` : '');
		} else {
			message = '낫띵';
		}
		Console.print(message);
	}
	async gameStart() {
		const answer = this.generateRandomNumber();
		while (this.mode !== GAME.FINISH) {
			let userInput = await Console.readLineAsync('숫자를 입력해주세요 : ');
			userInput = this.validUserInput(userInput);
			this.checkGameStatus(answer, userInput);
		}
	}
}
const app = new App();
app.play();
export default App;
