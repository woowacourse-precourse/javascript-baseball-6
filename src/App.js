import { MissionUtils } from "@woowacourse/mission-utils";

// to-do: playAgain is undefined

class App {
	constructor() {
		this.playAgain = true; // playAgain 변수를 클래스 레벨에서 정의
	}

	async play() {
		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

		while (this.playAgain) {
			await this.playGame();
		}
	}

	async askForRestart() {
		const userInput = await MissionUtils.Console.readLineAsync(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
		);
		await MissionUtils.Console.print(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		await MissionUtils.Console.print(userInput);

		if (userInput == "2") {
			MissionUtils.Console.print("게임을 종료합니다.");
			this.playAgain = false;
		} else if (userInput == "1") {
			await this.play();
		}

		return userInput;
	}

	async playGame() {
		const computerNumber = await this.getComputerNumber();
		let userNumberArr;
		let getResult;
		let result;

		do {
			userNumberArr = await this.getUserNumber();
			getResult = await this.compareNumbers(userNumberArr, computerNumber);

			await MissionUtils.Console.print(
				"사용자 입력값: " + userNumberArr.join("")
			); // 사용자 입력값 출력

			result = await this.printResult(
				getResult.strike,
				getResult.nothing,
				getResult.ball
			);

			await MissionUtils.Console.print(result); // 결과값 출력
		} while (getResult.strike !== 3 && userNumberArr.length == 3);

		await MissionUtils.Console.print(
			"3개의 숫자를 모두 맞히셨습니다! 게임 종료"
		);
		await this.askForRestart();
	}

	async getUserNumber() {
		try {
			const userNumber = await MissionUtils.Console.readLineAsync(
				"숫자를 입력해주세요 : "
			);

			if (userNumber.length !== 3) {
				await MissionUtils.Console.print(userNumber);
				throw new Error("[ERROR]");
			}

			// 배열로 담는 이유는 computerNumber 배열과 하나씩 비교하기 위함
			const userNumberArr = [...userNumber].map((x) => Number(x));
			return userNumberArr;
		} catch (error) {
			throw error;
		}
	}

	async getComputerNumber() {
		const computerNumber = [];
		while (computerNumber.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!computerNumber.includes(number)) {
				computerNumber.push(number);
			}
		}
		return computerNumber;
	}

	async compareNumbers(userNumberArr, computerNumber) {
		let strike = 0;
		let nothing = 0;
		let ball = 0;

		for (let i = 0; i < 3; i++) {
			if (userNumberArr[i] == computerNumber[i]) {
				strike += 1;
			} else {
				nothing += 1;
			}
			for (let j = 0; j < 3; j++) {
				if (userNumberArr[i] == computerNumber[j] && i != j) {
					ball += 1;
				}
			}
		}
		return { strike, nothing, ball };
	}

	async printResult(strike, nothing, ball) {
		let result;
		if (nothing == 3) {
			result = "낫싱";
		} else if (strike == 0) {
			result = ball + "볼";
		} else if (ball == 0) {
			result = strike + "스트라이크";
		} else {
			result = ball + "볼 " + strike + "스트라이크";
		}
		return result;
	}
}

export default App;
