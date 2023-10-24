import { MissionUtils } from "@woowacourse/mission-utils";

export async function getUserNum() {
    const USER_NUM = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

    if (USER_NUM.length !== 3 || !isNumber(USER_NUM) || hasDuplicates(USER_NUM)) {
        throw new Error('[ERROR]');
    }

    return USER_NUM;
}

function isNumber(str) {
    return /^[1-9]+$/.test(str);
}

function hasDuplicates(str) {
    const uniqueChars = new Set(str);
    return str.length !== uniqueChars.size;
}
