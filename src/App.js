import { Console, MissionUtils } from "@woowacourse/mission-utils";
import User from "./User.js";
import Analyzer from "./Analyzer.js";
import Printer from "./Printer.js";

class App {
	#answerLength = 3;
	constructor() {
		this.user = new User();
		this.printer = new Printer();
		this.analyzer = new Analyzer();
	}

	get #answer() {
		const result = new Set();
		while (result.size < this.#answerLength) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			result.add(number);
		}
		return [...result.values()];
	}

	async play() {
		Console.print("숫자 야구 게임을 시작합니다.");
		const answer = this.#answer;
		const gameResult = await this.progressTheGame(answer);
	}

	async progressTheGame(answer) {
		const userGuessInput = await this.user.guessTheAnswer();
		const analyzeResult = this.analyzeTheGame(answer, userGuessInput);
		this.printer.printOutpu(analyzeResult);
		return this.restartOrNot(analyzeResult, answer);
	}

	analyzeTheGame(answer, userGuessInput) {
		this.analyzer.settingAnalyzer(answer, userGuessInput);
		this.analyzer.checkValidInput();
		return this.analyzer.checkTheResult();
	}

	async restartOrNot(gameResult, answer) {
		const { strike } = gameResult;

		if (strike === 3) {
			Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
			const userInputValue = await MissionUtils.Console.readLineAsync(
				"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
			);

			const isRestart = userInputValue === "1";

			if (isRestart) {
				return await this.play();
			}
			return;
		}

		return await this.progressTheGame(answer);
	}
}

export default App;
