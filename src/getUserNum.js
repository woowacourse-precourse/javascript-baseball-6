import { MissionUtils } from "@woowacourse/mission-utils";

export async function getUserNum() {
    const USER_NUM = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

    if (USER_NUM.length !== 3) {
        throw new Error('[ERROR]')
    }

    return USER_NUM;
}
