import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
	get #answer() {
		const result = [];
		while (result.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!result.includes(number)) {
				result.push(number);
			}
		}
		return result;
	}

	async play() {
		const answer = this.#answer;
		console.log("숫자 야구 게임을 시작합니다.");
		await this.progressGame(answer);
		await this.restartOrNot();
	}

	async progressGame(answer) {
		const userInputValue = await this.enterValue(answer);
		const analysisOfResult = this.analysis(answer, userInputValue);
		this.announcementTheResults(answer, analysisOfResult);
	}

	async enterValue(answer) {
		console.log(`answer is ${answer}`);
		let userInputValue = await MissionUtils.Console.readLineAsync(
			"숫자를 입력하세요."
		);
		console.log(`input value is ${userInputValue}`);
		userInputValue = userInputValue.split("");
		if (userInputValue.length !== answer.length) {
			Console.print("게임 종료");
			throw new Error(
				`[ERROR] ${answer.length} 자리의 숫자를 입력하세요.`
			);
		}

		const result = [];
		for (const value of userInputValue) {
			if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) {
				console.error("숫자만 입력해주세요.");
				return this.progressGame(length);
			}
			result.push(Number(value));
		}

		return result;
	}

	analysis(answer, userInputValues) {
		let strike = 0;
		let ball = 0;
		for (let i = 0; i < answer.length; i++) {
			const isCorrect = answer[i] === userInputValues[i];

			if (isCorrect) {
				strike += 1;
				continue;
			}

			answer.includes(userInputValues[i]) ? (ball += 1) : null;
		}

		return {
			strike,
			ball,
		};
	}
	announcementTheResults(answer, result) {
		if (result.strike === 3) {
			Console.print("3스트라이크");
			return;
		}

		if (result.strike === 0 && result.ball === 0) {
			Console.print("낫싱");
			return this.progressGame(answer);
		}

		const strike = result.strike !== 0 ? `${result.strike}스트라이크` : "";
		const ball = result.ball !== 0 ? `${result.ball}볼` : "";

		Console.print(`${ball} ${strike}`.trim());
		return this.progressGame(answer);
	}

	async restartOrNot() {
		Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

		const userInputValue = await MissionUtils.Console.readLineAsync(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);

		if (userInputValue === "1") {
			return this.play();
		}
		return;
	}
}

export default App;