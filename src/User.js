import { MissionUtils } from "@woowacourse/mission-utils";

const [REPLAY, NUMBER] = ["replay", "number"];

class User {
	async getUserInput(value) {
		let userNum = "";
		let replay = "";
		try {
			if (value === NUMBER) {
				userNum = await MissionUtils.Console.readLineAsync(
					"숫자를 입력해주세요 : "
				);
			} else if (value === REPLAY) {
				replay = await MissionUtils.Console.readLineAsync(
					"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
				);
			}
		} catch (error) {}
		return userNum ? userNum : replay;
	}
}

export default User;
