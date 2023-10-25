import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";

export async function getInputNumbers() {
	const userNumbers = await MissionUtils.Console.readLineAsync(
		STRINGS.USER_INPUT
	);
	if (userNumbers.length !== 3) {
		throw Error("[ERROR] 3개의 숫자를 입력해야 합니다.");
	} else if (isNaN(userNumbers)) {
		throw Error("[ERROR] 숫자만 입력 가능합니다.");
	} else if (userNumbers.includes("0")) {
		throw Error("[ERROR] 1부터 9까지의 숫자만 입력 가능합니다.");
	} else {
		return userNumbers.toString();
	}
}
