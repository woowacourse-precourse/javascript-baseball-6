import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";

export async function getInputNumbers() {
	const userNumbers = await MissionUtils.Console.readLineAsync(
		STRINGS.USER_INPUT
	);
	if (userNumbers.length !== 3) {
		throw Error(STRINGS.ERROR_LENGTH);
	} else if (isNaN(userNumbers)) {
		throw Error(STRINGS.ERROR_NAN);
	} else if (userNumbers.includes("0")) {
		throw Error(STRINGS.ERROR_RANGE);
	} else {
		return userNumbers.toString();
	}
}
