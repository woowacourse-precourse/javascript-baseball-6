import { MissionUtils } from "@woowacourse/mission-utils";
import { messageRestartInputNumber } from "../constant/allPrintMessage";

/**
 * @returns 게임재시작 여부 입력 숫자 반환
 */
async function askForReplay() {
    return await MissionUtils.Console.readLineAsync(messageRestartInputNumber);
}

export default askForReplay;