import { MissionUtils } from "@woowacourse/mission-utils";

class User {
	async response(request) {
		const inputValue = await MissionUtils.Console.readLineAsync(request);
		return inputValue;
	}
}

export default User;
