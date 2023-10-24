import { Console, Random } from '@woowacourse/mission-utils';
import { COMMAND, GAME, ERROR } from './Constant.js';
class App {
	constructor() {
		this.mode = GAME.PLAYING;
	}
	/**
	 * 시작 메세지 보여주는 함수
	 */
	showStartMessage() {
		Console.print(COMMAND.START);
	}

	/**
	 * 랜덤한 3개의 숫자 만드는 함수
	 * @returns 랜덤한 숫자 3개 반환 ex) [1,4,5]
	 */
	generateRandomNumber() {
		const randomNumberList = [];
		while (randomNumberList.length < GAME.NUMBER_LENGTH) {
			const randomNumber = Random.pickNumberInRange(1, 9);
			if (!randomNumberList.includes(randomNumber))
				randomNumberList.push(randomNumber);
		}
		return randomNumberList.sort();
	}

	/**
	 * 사용자 입력 가공하는 함수
	 * @param {string} userInput ex) "123"
	 * @returns list반환 ex) [1,2,3]
	 */
	toListUserInput(userInput) {
		if (userInput.length === 0) throw new Error(ERROR.NOT_INPUT);
		this.checkValidationInput(userInput);
		userInput = userInput.split('').map((number) => Number(number));
		return userInput;
	}

	/**
	 * 사용자 입력 유효한지 확인하는 함수
	 * @param {list} userInput
	 */
	checkValidationInput(userInput) {
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
	}

	/**
	 * 볼 개수 확인하는 함수
	 * @param {list} answer
	 * @param {list} userInput
	 * @returns Number ex) 3
	 */
	countBall(answer, userInput) {
		let count = 0;
		userInput.forEach((number, index) => {
			if (answer.includes(number) && answer[index] !== number) {
				count++;
			}
		});
		return count;
	}

	/**
	 * 스트라이크 개수 확인하는 함수
	 * @param {list} answer
	 * @param {list} userInput
	 * @returns number ex) 3
	 */
	countStrike(answer, userInput) {
		let count = 0;
		userInput.forEach((_, index) => {
			if (answer[index] === userInput[index]) {
				count++;
			}
		});
		return count;
	}

	/**
	 * 볼, 스트라이크 개수에 따른 게임 처리하는 함수
	 * @param {list} answer
	 * @param {list} userInput
	 */
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

	/**
	 * 게임 재시작 처리하는 함수
	 */
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

	/**
	 * 게임 시작하는 함수
	 */
	async gameStart() {
		const answer = this.generateRandomNumber();
		while (this.mode !== GAME.FINISH) {
			let userInput = await Console.readLineAsync(COMMAND.INPUT);
			userInput = this.toListUserInput(userInput);
			this.checkGameStatus(answer, userInput);
		}
		this.userSelectRestart();
	}

	async play() {
		this.showStartMessage();
		await this.gameStart();
	}
}
export default App;
