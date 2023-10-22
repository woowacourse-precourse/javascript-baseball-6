import { Random } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';
import PrintConsole from './PrintConsole.js';

class App {
	#computerAnswer = [];
	#userInput = new UserInput();
	#printConsole = new PrintConsole();

	generateRandomNumber() {
		const generateNumberResponse = Random.pickUniqueNumbersInRange(1, 9, 3);
		this.#computerAnswer = generateNumberResponse;
	}

	#compareUserAndComputer(inputVal) {
		let strike = 0,
			ball = 0;
		const inputDigits = Array.from(inputVal, Number);

		for (let index = 0; index < 3; index++) {
			if (this.#computerAnswer.includes(inputDigits[index])) {
				if (this.#computerAnswer[index] === inputDigits[index]) strike++;
				else ball++;
			}
		}

		return this.#printConsole.gameResult(ball, strike);
	}

	async #playGame() {
		const inputVal = await this.#userInput.baseballInput();
		this.#compareUserAndComputer(inputVal);
	}

	async play() {
		this.generateRandomNumber();
		this.#playGame();
	}
}

const app = new App();
app.play();

export default App;
