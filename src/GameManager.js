import Counter from "./Counter.js";
import User from "./User.js";
import Validator from "./Validator.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputProvider from "./OutputProvider.js";

class GameManager {
	#answer;
	#answerSize;
	constructor() {
		this.#answer = [];
		this.#answerSize = 0;
		this.validator = new Validator();
		this.user = new User();
		this.counter = new Counter();
		this.outputProvider = new OutputProvider();
	}

	setGameState(answerSize) {
		const result = new Set();
		this.#answerSize = answerSize;

		while (result.size < answerSize) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			result.add(number);
		}
		this.#answer = [...result.values()];
		return;
	}

	async proceed() {
		const input = await this.user.request("숫자를 입력해주세요");
		this.validator.evalutae(input, this.#answerSize);

		const { strike, ball } = this.counter.count(input, this.#answer);
		const { result, message } = this.outputProvider.output(
			strike,
			ball,
			this.#answerSize
		);

		this.print(message);
		if (result === "Correct") {
			return await this.gameOver();
		}

		return await this.proceed();
	}

	async gameOver() {
		this.print(
			`${this.#answerSize}개의 숫자를 모두 맞히셨습니다! 게임 종료`
		);
		const input = await this.user.request(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		return input === "1" ? "Restart" : "GameOver";
	}

	print(content) {
		return Console.print(content);
	}
}

export default GameManager;
