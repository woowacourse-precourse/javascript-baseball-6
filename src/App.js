import { MissionUtils } from "@woowacourse/mission-utils";

class App {
	constructor() {
		this.answer = [];
		this.isPlaying = true;
	}

	async play() {
		while (this.isPlaying) {
			this.printStartMessage();
			await this.setUpAnswer();
			await this.gameLoop();
			await this.checkContinue();
		}
	}

	printStartMessage() {
		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
	}

	async setUpAnswer() {
		this.answer = [];
		while (this.answer.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!this.answer.includes(number)) {
				this.answer.push(number);
			}
		}
	}

	async gameLoop() {
		let result;
		do {
			const userGuess = await this.getUserGuess();
			result = this.checkGuess(userGuess);
			MissionUtils.Console.print(result.message);
		} while (result.strikes < 3);

		MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
	}

	async getUserGuess() {
		const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
		if (!/^[1-9]{3}$/.test(input)) {
			throw new Error("[ERROR] 잘못된 입력입니다. 1-9 사이의 서로 다른 숫자 3개를 입력해주세요.");
		}

		return input.split("").map(Number);
	}

	checkGuess(userGuess) {
		let strikes = 0;
		let balls = 0;

		userGuess.forEach((num, index) => {
			if (this.answer.includes(num)) {
				(this.answer[index] === num) ? strikes++ : balls++;
			}
		});

		return {
			message: strikes === 0 && balls === 0 ? "낫싱" : `${balls}볼 ${strikes}스트라이크`,
			strikes
		};
	}

	async checkContinue() {
		const input = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ");
		if (input === "1") {
			this.isPlaying = true;
		} else if (input === "2") {
			this.isPlaying = false;
		} else {
			throw new Error("[ERROR] 잘못된 입력입니다. 1 또는 2를 입력해주세요.");
		}
	}
}

export default App;