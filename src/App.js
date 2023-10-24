import { Random } from '@woowacourse/mission-utils';
import UserInput from './UserInput.js';
import PrintConsole from './PrintConsole.js';

class App {
	#computerAnswer = [];
	#userInput = new UserInput();
	#printConsole = new PrintConsole();

	generateRandomNumber() {
		this.#computerAnswer = [];

		while (this.#computerAnswer.length < 3) {
			const generatedNumber = Random.pickNumberInRange(1, 9);

			if (!this.#computerAnswer.includes(generatedNumber))
				this.#computerAnswer.push(generatedNumber);
		}
	}

	#compareUserAndComputer(inputVal) {
		let strike = 0;
		let ball = 0;
		const inputDigits = Array.from(inputVal, Number);

		for (let index = 0; index < 3; index++) {
			if (this.#computerAnswer.includes(inputDigits[index])) {
				if (this.#computerAnswer[index] === inputDigits[index]) strike++;
				else ball++;
			}
		}

		this.#printConsole.gameResult(ball, strike);
		return strike;
	}

	async #gameEnd() {
		this.#printConsole.gameEnd();

		const gameRestart = await this.#userInput.gameEndInput();
		if (gameRestart === '1') return this.play();

		return;
	}

	async #playGame() {
		try {
			const inputVal = await this.#userInput.baseballInput();

			if (this.#compareUserAndComputer(inputVal) === 3) return this.#gameEnd();

			return this.#playGame();
		} catch (error) {
			throw new Error(error);
		}
	}

	async play() {
		this.generateRandomNumber();
		await this.#playGame();
	}
}

const app = new App();
app.play();

export default App;
