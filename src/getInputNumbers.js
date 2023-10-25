import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";

export async function getInputNumbers() {
	const userNumbers = await MissionUtils.Console.readLineAsync(
		STRINGS.USER_INPUT
	);
}
