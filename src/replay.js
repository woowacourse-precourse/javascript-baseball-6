import { MissionUtils } from "@woowacourse/mission-utils";
import { STRINGS } from "./constants/strings";

export async function replay() {
	const replay = await MissionUtils.Console.readLineAsync(STRINGS.ASK_REPLAY);
	if (replay === "1" || replay === "2") {
		return replay;
	} else {
		throw new Error(`[ERROR] ${STRINGS.ASK_REPLAY}`);
	}
}
