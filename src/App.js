import BaseBallGameComputer from './Model/BaseBallGameComputer.js';
import BaseBallGame from './controller/BaseBallGame.js';

class App {
	#baseBallGame;
	#model;

	constructor() {
		this.#model = new BaseBallGameComputer();
		this.#baseBallGame = new BaseBallGame(this.#model);
	}

	async play() {
		await this.#baseBallGame.start();
	}
}

// const a = new App();
// a.play();
export default App;
