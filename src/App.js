import GameProcess from "./GameProcess.js";

class App {
	constructor() {
		this.gameProcess = new GameProcess();
	}

	async play() {
		this.gameProcess.initalizeGame();
		const midTermResult = await this.gameProcess.progressGame();
		await this.gameProcess.midTermResultEvaluation(midTermResult);
		const gameResult = await this.gameProcess.endTheGame();

		if (gameResult === "Restart") {
			await this.play();
		}
	}
}

export default App;
