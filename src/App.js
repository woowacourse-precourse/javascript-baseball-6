import { Console } from "@woowacourse/mission-utils";
import GameManager from "./GameManager.js";

class App {
	/**
	 * @private {number} - 몇 자리의 수를 정답으로 생성할 것인지 결정
	 */
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
		return Console.print(gameResult);
	}
}

export default App;

const app = new App();
app.play();
