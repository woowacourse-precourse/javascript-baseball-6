import { MissionUtils } from "@woowacourse/mission-utils";

class App {
	constructor() {
		this.computerNum = this.generateRandomNumber();
	}

	generateRandomNumber() {
		// 랜덤 3자리수 생성
		const nums = new Set();
		while (nums.size < 3) {
			nums.add(MissionUtils.Random.pickNumberInRange(1, 9));
		}
		return [...nums];
	}

	async createPlayerNum() {
		// 플레이어에게 숫자를 입력받음
		const PLAYER_NUM = await MissionUtils.Console.readLineAsync(
			"숫자를 입력해주세요 : "
		);

		if (PLAYER_NUM.length !== 3) {
			// 3자리 숫자가 아닌 경우 에러를 발생
			throw new Error("ERROR: 숫자는 반드시 3자리여야 합니다.");
		}

		const digits = Array.from(PLAYER_NUM).map(Number);

		if (new Set(digits).size !== digits.length) {
			// 중복된 숫자를 입력한 경우 에러를 발생
			throw new Error("ERROR: 중복된 숫자를 입력하셨습니다.");
		}

		return digits;
	}

	async compareNum(playerNum) {
		let COMPUTER_NUM = [...this.computerNum];
		let strike = 0;
		let ball = 0;

		// 스트라이크
		playerNum.forEach((num, index) => {
			if (num === COMPUTER_NUM[index]) {
				strike++;
				playerNum[index] = undefined;
				COMPUTER_NUM[index] = undefined;
			}
		});

		// 볼
		playerNum = playerNum.filter((num) => num !== undefined);
		COMPUTER_NUM = COMPUTER_NUM.filter((num) => num !== undefined);

		playerNum.forEach((num) => {
			const ballIndex = COMPUTER_NUM.indexOf(num);
			if (ballIndex !== -1) {
				ball++;
				COMPUTER_NUM[ballIndex] = undefined;
			}
		});

		await this.resultText(strike, ball);

		if (strike === 3) {
			return this.gameEnd();
		} else {
			return this.compareNum(await this.createPlayerNum());
		}
	}

	async resultText(strike, ball) {
		let result = "";
		if (strike === 0 && ball === 0) {
			result = "낫싱";
		} else {
			if (strike > 0) {
				result += `${strike}스트라이크`;
			}
			if (ball > 0) {
				result += result ? ` ${ball}볼` : `${ball}볼`;
			}
		}
		MissionUtils.Console.print(result);
	}

	async gameEnd() {
		const GAME_END_TXT = await MissionUtils.Console.readLineAsync(
			"3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
		);
		if (GAME_END_TXT === "1") {
			this.computerNum = this.generateRandomNumber();
			return this.compareNum(await this.createPlayerNum());
		} else if (GAME_END_TXT === "2") {
			MissionUtils.Console.print("게임 종료");
		} else {
			throw new Error("[ERROR]");
		}
	}

	async play() {
		MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
		return this.compareNum(await this.createPlayerNum());
	}
}

export default App;
