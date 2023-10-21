import { Console, MissionUtils } from "@woowacourse/mission-utils";
import GameManager from "./GameManager.js";

class App {
	#answerSize = 3;

	constructor() {
		this.gameManager = new GameManager();
	}

	async play() {
		Console.print("숫자 야구 게임을 시작합니다.");

		this.gameManager.setGameState(this.#answerSize);
		const gameResult = await this.gameManager.proceed();

		if (gameResult === "Restart") {
			return await this.play();
		}
		return "Game Over";
	}
}

export default App;

const app = new App();
app.play();
