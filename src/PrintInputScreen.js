import {MissionUtils} from "@woowacourse/mission-utils";
export async function printInputScreen(outWrite) {
    return await MissionUtils.Console.readLineAsync(outWrite);
}
