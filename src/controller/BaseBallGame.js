import GameConsole from '../Model/GameConsole.js';
import GAME from '../constants/Game.js';
import Io from '../io/Io.js';

class BaseBallGame {
	#model;

	constructor(model) {
		this.#model = model;

		Io.printStart();
	}

	async start() {
		this.#model.setAnswerNumber();
		await this.#getTryNumber();
	}

	async #getTryNumber() {
		const tryNumber = await Io.getTryNumber();

		this.#model.setTryNumber(tryNumber);
		await this.#printResult();
	}

	async #printResult() {
		const [ballCount, strikeCount] = this.#model.getResult();

		Io.printResult([ballCount, strikeCount]);

		this.#checkClear();
	}

	async #checkClear() {
		if (this.#model.isClear()) await this.#clear();
		else await this.#getTryNumber();
	}

	async #clear() {
		Io.printClear();

		this.#checkRestart();
	}

	async #checkRestart() {
		let command = await Io.getRestart();

		command = GameConsole.isValidRestartCommand(command); // 이 데이터를 추후에 사용하지 않으므로 static

		if (command === GAME.restart) await this.start();
		else if (command === GAME.exit) this.#exit();
	}

	#exit() {
		// 종료
		// 추가적인 종료 문구가 필요하다면 여기에..
	}
}

export default BaseBallGame;
