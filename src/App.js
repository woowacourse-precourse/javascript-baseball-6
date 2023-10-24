import { MissionUtils } from "@woowacourse/mission-utils";

// TODO: airbnb 컨벤션 적용

class App {
	constructor() {
		// PLAY_AGAIN 변수를 클래스 레벨에서 정의
		this.PLAY_AGAIN = true;
	}

	async play() {
		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

		while (this.PLAY_AGAIN) {
			await this.playGame();
		}
	}

	async askForRestart() {
		const USER_INPUT = await MissionUtils.Console.readLineAsync(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: "
		);
		await MissionUtils.Console.print(
			"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		await MissionUtils.Console.print(USER_INPUT);

		if (USER_INPUT == 2) {
			MissionUtils.Console.print("게임을 종료합니다.");
			this.PLAY_AGAIN = false;
		} else if (USER_INPUT == 1) {
			await this.play();
		}

		return USER_INPUT;
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
			);

			result = await this.printResult(
				getResult.STRIKE,
				getResult.NOTHING,
				getResult.BALL
			);

			await MissionUtils.Console.print(result); // 결과값 출력
		} while (getResult.STRIKE !== 3 && userNumberArr.length === 3);

		await MissionUtils.Console.print(
			"3개의 숫자를 모두 맞히셨습니다! 게임 종료"
		);
		await this.askForRestart();
	}

	async getUserNumber() {
		try {
			const USER_NUMBER = await MissionUtils.Console.readLineAsync(
				"숫자를 입력해주세요 : "
			);

			if (USER_NUMBER.length !== 3) {
				await MissionUtils.Console.print(USER_NUMBER);
				throw new Error("[ERROR]");
			}

			// 배열로 담는 이유는 computerNumber 배열과 하나씩 비교하기 위함
			const userNumberArr = [...USER_NUMBER].map((x) => Number(x));
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
		let STRIKE = 0;
		let NOTHING = 0;
		let BALL = 0;

		for (let i = 0; i < 3; i++) {
			if (userNumberArr[i] === computerNumber[i]) {
				STRIKE += 1;
			} else {
				NOTHING += 1;
			}
			for (let j = 0; j < 3; j++) {
				if (userNumberArr[i] === computerNumber[j] && i !== j) {
					BALL += 1;
				}
			}
		}
		return { STRIKE, NOTHING, BALL };
	}

	async printResult(STRIKE, NOTHING, BALL) {
		let result;
		if (NOTHING === 3) {
			result = "낫싱";
		} else if (STRIKE === 0) {
			result = BALL + "볼";
		} else if (BALL === 0) {
			result = STRIKE + "스트라이크";
		} else {
			result = BALL + "볼 " + STRIKE + "스트라이크";
		}
		return result;
	}
}

export default App;
