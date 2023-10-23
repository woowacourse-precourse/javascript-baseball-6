import { MissionUtils } from "@woowacourse/mission-utils";
import User from "./User.js";

const [REPLAY, NUMBER] = ["replay", "number"];
const user = new User();

class Computer {
	getRandomNum() {
		const computer = [];
		while (computer.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!computer.includes(number)) {
				computer.push(number);
			}
		}
		return computer.join("");
	}

	guessBaseball(userNum, comNum) {
		let strike = 0;
		let ball = 0;
		let result = "";

		[...userNum].map((v, i) => {
			if (comNum[i] === v) {
				strike++;
				return "스트라이크";
			} else if (comNum.includes(v)) {
				ball++;
				return "볼";
			} else return "낫싱";
		});

		result = (ball ? ball + "볼 " : "") + (strike ? strike + "스트라이크" : "");

		return result ? result : "낫싱";
	}

	async guessNum() {
		const comNum = this.getRandomNum();
		let userNum = "";
		let replay = "";

		while (comNum !== userNum) {
			userNum = await user.getUserInput(NUMBER);
			MissionUtils.Console.print(this.guessBaseball(userNum, comNum));
		}
		MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

		replay = await user.getUserInput(REPLAY);
		if (replay === "1") this.guessNum();
		else if (replay === "2") return;
	}
}

export default Computer;
