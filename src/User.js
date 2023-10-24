import { MissionUtils } from "@woowacourse/mission-utils";

const [REPLAY, NUMBER] = ["replay", "number"];
const ERROR = "[ERROR] 숫자가 잘못된 형식입니다.";

class User {
	async getUserInput(value) {
		let userNum = "";
		let replay = "";

		if (value === NUMBER) {
			userNum = await MissionUtils.Console.readLineAsync(
				"숫자를 입력해주세요 : "
			);

			if (isNaN(parseInt(userNum))) throw new Error(ERROR);
			if (userNum.length !== 3) throw new Error(ERROR);
		} else if (value === REPLAY) {
			replay = await MissionUtils.Console.readLineAsync(
				"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
			);

			if (replay !== "1" && replay !== "2") throw new Error(ERROR);
		}

		return userNum ? userNum : replay;
	}
}

export default User;
