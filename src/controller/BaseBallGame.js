import GameConsole from '../Model/GameConsole.js';
import GAME from '../constants/Game.js';
import Io from '../io/Io.js';

class BaseBallGame {
	#model;

	constructor(model) {
		this.#model = model;

		Io.printStart();
	}

	// 게임 시작
	async start() {
		this.#model.setAnswerNumber();
		await this.#getTryNumber();
	}

	// 시도 넘버 입력 받기
	async #getTryNumber() {
		const tryNumber = await Io.getTryNumber();

		this.#model.setTryNumber(tryNumber);
		await this.#printResult();
	}

	// 시도 넘버의 결과 출력하기
	async #printResult() {
		const [ballCount, strikeCount] = this.#model.getResult();

		Io.printResult([ballCount, strikeCount]);

		this.#checkClear();
	}

	// 클리어 여부 확인하기
	async #checkClear() {
		if (this.#model.isClear()) await this.#clear();
		else await this.#getTryNumber();
	}

	// 게임 클리어 알리기
	async #clear() {
		Io.printClear();

		this.#checkRestart();
	}

	// 재시도 여부 확인하기
	async #checkRestart() {
		let command = await Io.getRestart();

		command = GameConsole.isValidRestartCommand(command);

		if (command === GAME.restart) await this.start();
		else if (command === GAME.exit) this.#exit();
	}

	#exit() {
		// 종료
		// 추가적인 종료 문구가 필요하다면 여기에..
	}
}

export default BaseBallGame;
