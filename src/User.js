import { MissionUtils } from "@woowacourse/mission-utils";

class User {
	async guessTheAnswer() {
		let userInputValue = await MissionUtils.Console.readLineAsync(
			"숫자를 입력하세요."
		);
		return userInputValue;
	}
}

export default User;
