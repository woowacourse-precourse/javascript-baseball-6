import Computer from "./Computer.js";
import Input from "./Input.js";
import Interface from "./Interface.js";

class GameProcess {
	constructor() {
		this.input = new Input();
		this.computer = new Computer();
		this.interface = new Interface();
	}

	initalizeGame() {
		this.interface.printMessage("숫자 야구 게임을 시작합니다.");
		this.computer.createAnswer();
	}

	/**
	 * @description TheCount는 볼과 스트라이크를 묶어서 부르는 야구 용어이다.
	 */
	async progressGame() {
		const value = await this.input.enterExpectedAnswerValue();
		const theCount = this.computer.outputOfTheCountAlongValue(value);
		const result = this.computer.outputOfResultAlongTheCount(theCount);
		return result;
	}

	/**
	 * @param {"Correct" | "Incorrect"} midTermResult
	 * @returns {void} - 정답이아닐경우 게임을 다시 진행한다.
	 */
	async midTermResultEvaluation(midTermResult) {
		if (midTermResult === "Incorrect") {
			return await this.progressGame();
		}
	}

	async endTheGame() {
		const value = await this.input.enterRestartOrNotValue();
		return value;
	}
}

export default GameProcess;
