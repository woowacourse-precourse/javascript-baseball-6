import BaseBallGameComputer from './Model/BaseBallGameComputer.js';
import GameConsole from './Model/GameConsole.js';
import BaseBallGame from './controller/BaseBallGame.js';

class App {
	#gameConsole; // 게임 기기( 하드웨어 )
	#gameSoftware; // 게임 칩 ( 소프트웨어 )
	#controller;

	constructor() {
		this.#gameConsole = new GameConsole();
		this.#gameSoftware = new BaseBallGameComputer();
		this.#controller = new BaseBallGame(this.#gameSoftware, this.#gameConsole);
	}

	async play() {
		await this.#controller.start();
	}
}

// const a = new App();
// a.play();

export default App;
