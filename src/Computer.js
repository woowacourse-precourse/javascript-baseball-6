import Interface from "./Interface.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
	#answer;
	constructor() {
		this.interface = new Interface();
	}

	createAnswer() {
		const answer = new Set();
		while (answer.size < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			answer.add(String(number));
		}
		this.#answer = [...answer.values()];
	}

	/**
	 * @param {string} value
	 * @returns {{strike: number, ball: number}}
	 */
	outputOfTheCountAlongValue(value) {
		let [strike, ball] = [0, 0];
		for (let i = 0; i < 3; i++) {
			if (this.#answer.includes(value[i])) {
				this.#answer[i] === value[i] ? (strike += 1) : (ball += 1);
			}
		}
		return { strike, ball };
	}

	/**
	 * @param {{strike: number, ball: number}} theCount
	 * @returns {"Correct" | "Incorrect"}
	 */
	outputOfResultAlongTheCount(theCount) {
		return (
			this.outputCorrectCase(theCount) ||
			this.outputNotingCase(theCount) ||
			this.outputDefaultCase(theCount)
		);
	}

	outputCorrectCase(theCount) {
		if (theCount.strike === 3) {
			this.interface.printMessage("3스트라이크");
			this.interface.printMessage(
				"3개의 숫자를 모두 맞히셨습니다! 게임 종료"
			);
			return "Correct";
		}
	}

	outputNotingCase(theCount) {
		if (theCount.ball === 0 && theCount.strike === 0) {
			this.interface.printMessage("낫싱");
			return "Incorrect";
		}
	}

	outputDefaultCase(theCount) {
		const ballMessage = theCount.ball !== 0 ? `${theCount.ball}볼` : "";
		const strikeMessage =
			theCount.strike !== 0 ? `${theCount.strike}스트라이크` : "";
		const message = `${ballMessage} ${strikeMessage}`.trim();
		this.interface.printMessage(message);

		return "Incorrect";
	}
}

export default Computer;
