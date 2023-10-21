import { MissionUtils } from "@woowacourse/mission-utils";

class User {
	async request(content) {
		const inputValue = await MissionUtils.Console.readLineAsync(content);
		return inputValue;
	}
}

export default User;
