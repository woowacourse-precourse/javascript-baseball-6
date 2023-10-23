import { MissionUtils } from "@woowacourse/mission-utils";

// to-do: 사용자 입력값이 [0]번째 인덱스만 나타내고 있음

class App {
	async play() {
		// 컴퓨터 숫자와 사용자 숫자를 비동기로 가져오기
		const computerNumber = await this.getComputerNumber();
		const userNumberArr = await this.getUserNumber();

		// 비교하고 결과 출력
		const getResult = await this.compareNumbers(userNumberArr, computerNumber);
		const result = await this.printResult(
			getResult.strike,
			getResult.nothing,
			getResult.ball
		);

		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
		while (getResult.strike != 3) {
			MissionUtils.Console.print(
				"숫자를 입력해주세요 : " + userNumberArr.join("")
			);
			MissionUtils.Console.print(result);
		}
	}

	async getUserNumber() {
		try {
			const userNumber = await MissionUtils.Console.readLineAsync(
				"숫자를 입력해주세요 : "
			);
			const userNumberArr = [...userNumber].map((x) => Number(x));
			console.log("사용자 입력값 : ", userNumberArr);
			return userNumberArr;
		} catch (error) {
			// MissionUtils.Console.print("reject 되었습니다");
			// console.log("오류 발생:", error);
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
		console.log("컴퓨터 입력값 : ", computerNumber);
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
		// console.log("strike : ", strike, "nothing : ", nothing, "ball : ", ball);
		return { strike, nothing, ball };
	}

	async printResult(strike, nothing, ball) {
		let result;
		if (nothing == 3) {
			MissionUtils.Console.print("낫싱");
			result = "낫싱";
		} else if (strike == 0) {
			MissionUtils.Console.print(ball + "볼");
			result = ball + "볼";
		} else if (ball == 0) {
			MissionUtils.Console.print(strike + "스트라이크");
			result = strike + "스트라이크";
		} else if (strike == 3) {
			MissionUtils.Console.print("3스트라이크");
			MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
			result = "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
		} else {
			MissionUtils.Console.print(ball + "볼 " + strike + "스트라이크");
			result = ball + "볼 " + strike + "스트라이크";
		}
		return result;
	}
}

export default App;
