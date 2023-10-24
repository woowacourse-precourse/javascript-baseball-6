import { MissionUtils } from "@woowacourse/mission-utils";

const [REPLAY, NUMBER] = ["replay", "number"];
const ERROR = "[ERROR] 숫자가 잘못된 형식입니다.";

class User {
	async getUserInput(value) {
		let userNum = "";
		let replay = "";
		try {
			if (value === NUMBER) {
				userNum = await MissionUtils.Console.readLineAsync(
					"숫자를 입력해주세요 : "
				);

				if (isNaN(parseInt(userNum))) throw ERROR;
				if (userNum.length !== 3) throw ERROR;
			} else if (value === REPLAY) {
				replay = await MissionUtils.Console.readLineAsync(
					"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
				);

				if (replay !== "1" && replay !== "2") throw ERROR;
			}
		} catch (error) {
			MissionUtils.Console.print(error);
			return;
		}
		return userNum ? userNum : replay;
	}
}

export default User;

// // constructor(inputValue) {
// // 	this.inputValue = inputValue;
// // }
// async getUserInput(value) {
// 	try {
// 		if (value === NUMBER) {
// 			this.inputValue = await MissionUtils.Console.readLineAsync(
// 				"숫자를 입력해주세요 : "
// 			);
// 		} else if (value === REPLAY) {
// 			this.inputValue = await MissionUtils.Console.readLineAsync(
// 				"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
// 			);
// 		}
// 	} catch (error) {
// 		if (isNaN(parseInt(this.inputValue))) {
// 			throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
// 		}
// 	}
// 	return this.inputValue;
// }
