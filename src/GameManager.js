import Counter from "./Counter.js";
import User from "./User.js";
import Validator from "./Validator.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class GameManager {
	#answer;
	constructor(answer) {
		this.#answer = answer;
		this.validator = new Validator();
		this.user = new User();
		this.counter = new Counter();
	}

	print(content) {
		return Console.print(content);
	}

	createAnswer(answerSize) {
		const result = new Set();
		while (result.size < answerSize) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			result.add(number);
		}
		this.#answer = [...result.values()];
		return;
	}

	async progressTheGame() {
		const inputValue = await this.requestGuessInput();

		const gameResult = this.calculateResult(inputValue);
		if (gameResult === "Correct") {
			return await this.requestRestartOrNot();
		}

		return await this.progressTheGame();
	}

	async requestGuessInput() {
		try {
			const inputValue = await this.user.response("숫자를 입력하세요.");
			this.validator.evalutae(inputValue, this.#answer);

			return inputValue.split("");
		} catch (error) {
			throw new Error(error);
		}
	}

	calculateResult(inputValue) {
		const { strike, ball } = this.counter.countStrikeAndBall(
			inputValue,
			this.#answer
		);
		const answerCount = this.#answer.length;

		if (strike === answerCount) {
			this.print(`${answerCount}스트라이크`);
			this.print(
				`${answerCount}개의 숫자를 모두 맞히셨습니다! 게임 종료`
			);
			return "Correct";
		}

		if (strike === 0 && ball === 0) {
			this.print("낫싱");
			return "InCorrect";
		}

		const strikeOutput = strike !== 0 ? `${strike}스트라이크` : "";
		const ballOutput = ball !== 0 ? `${ball}볼` : "";
		const output = `${ballOutput} ${strikeOutput}`.trim();

		this.print(output);
		return "InCorrect";
	}

	async requestRestartOrNot() {
		const inputValue = await this.user.response(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		return inputValue === "1" ? "Restart" : "Game Over";
	}
}

export default GameManager;
