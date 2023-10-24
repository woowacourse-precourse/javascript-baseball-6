import { Console } from '@woowacourse/mission-utils';
import GameConsole from '../Model/GameConsole.js';
import GAME from '../constants/Game.js';
import Io from '../io/Io.js';
import allZero from '../utils/allZero.js';

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
		const tryNumber = await Io.getTryNumber(); // 에러 발생 위치

		this.#model.setTryNumber(tryNumber);
		await this.#getResult();
	}

	async #getResult() {
		const [ballCount, strikeCount] = this.#model.getBallAndStrikeCounts();

		Io.printResult([ballCount, strikeCount]);

		this.#checkClear(strikeCount);
	}

	async #checkClear(strikeCount) {
		if (strikeCount !== GAME.size) await this.#getTryNumber();
		else await this.#gameClear();
	}

	async #gameClear() {
		Io.printClear();

		let command = await Io.getRestart(); // 에러 발생 위치

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
