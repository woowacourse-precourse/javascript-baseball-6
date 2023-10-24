import { MissionUtils } from "@woowacourse/mission-utils";
import { messageRestartInputNumber } from "../constant/allPrintMessage";

async function askForReplay() {
    return await MissionUtils.Console.readLineAsync(messageRestartInputNumber);
}

export default askForReplay;