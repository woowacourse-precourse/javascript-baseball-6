import Counter from "./Counter.js";
import InputHandler from "./InputHandler.js";
import Validator from "./Validator.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";
import OutputProvider from "./OutputProvider.js";

/**
 * @typedef {Object} Values
 * @property {string} input
 * @property {number[]} answer
 */
class GameManager {
	/**
	 * @type {Values}
	 */
	#values;
	constructor() {
		this.#values = {
			input: [],
			answer: [],
		};
		this.validator = new Validator();
		this.inputHandler = new InputHandler();
		this.counter = new Counter();
		this.outputProvider = new OutputProvider();
	}

	/**
	 * 정답 생성
	 * @param {number} answerSize - 게임 초기에 정한 정답의 길이
	 * @returns {void}
	 */
	setGameState(answerSize) {
		const result = new Set();

		while (result.size < answerSize) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			result.add(String(number));
		}
		this.#values.answer = [...result.values()];
		console.log(this.#values.answer);
		return;
	}

	/**
	 * 규칙에 따라 게임을 진행
	 * @returns {"Restart" | "GameOver"} - 게임이 종료 후 다시 시작할 것인지에 대한 여부
	 */
	async proceed() {
		this.#values.input = await this.inputHandler.request(
			"숫자를 입력해주세요"
		);
		this.validator.evalutae(this.#values);

		const counts = this.counter.count(this.#values);
		const { result, message } = this.outputProvider.calculate(
			counts,
			this.#values.answer
		);

		this.print(message);
		if (result === "Correct") {
			return await this.gameOver();
		}

		return await this.proceed();
	}

	/**
	 * 게임 종료 후 재시작 여부를 결정
	 * @returns {"Restart" | "GameOver"}
	 */
	async gameOver() {
		const answerLength = this.#values.answer.length;

		this.print(`${answerLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
		const input = await this.inputHandler.request(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		return input[0] === "1" ? "Restart" : "GameOver";
	}

	/**
	 *
	 * @param {string} content
	 * @returns {void} - 터미널에 요구하는 내용을 출력
	 */
	print(content) {
		return Console.print(content);
	}
}

export default GameManager;
