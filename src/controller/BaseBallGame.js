import GAME from '../constants/Game.js';
import Io from '../io/Io.js';

class BaseBallGame {
	#gameConsole;
	#gameSw;

	constructor(gameSoftware, gameConsole) {
		this.#gameSw = gameSoftware;
		this.#gameConsole = gameConsole;

		Io.printStart();
	}

	// 게임 시작
	async start() {
		this.#gameSw.setAnswerNumber();
		await this.#getTryNumber();
	}

	// 시도 넘버 입력 받기
	async #getTryNumber() {
		const tryNumber = await Io.getTryNumber();

		this.#gameSw.setTryNumber(tryNumber);
		await this.#printResult();
	}

	// 시도 넘버의 결과 출력하기
	async #printResult() {
		const [ballCount, strikeCount] = this.#gameSw.getResult();

		Io.printResult([ballCount, strikeCount]);

		this.#checkClear();
	}

	// 클리어 여부 확인하기
	async #checkClear() {
		if (this.#gameSw.isClear()) await this.#clear();
		else await this.#getTryNumber();
	}

	// 게임 클리어 알리기
	async #clear() {
		Io.printClear();

		this.#checkRestart();
	}

	// 재시도 여부 확인하기
	async #checkRestart() {
		const command = await Io.getRestart();
		this.#gameConsole.setRestartCommand(command);

		if (this.#gameConsole.currentCommand === GAME.restart) await this.start();
		else if (this.#gameConsole.currentCommand === GAME.exit) this.#exit();
	}

	#exit() {
		// 종료
		// 추가적인 종료 문구가 필요하다면 여기에..
	}
}

export default BaseBallGame;
