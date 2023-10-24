import { MissionUtils } from "@woowacourse/mission-utils";
import { judgeNumber, pickRandomNumber } from "./computer.js";
import { ERROR_MESSAGES, OUTPUT_MESSAGES } from "./constant/constant.js";

export async function enterNumber(computerNum) {
    const REGEX = /[^1-9]/; // 숫자 1~9 외의 문자 찾아내는 정규표현식

    const playerNum = await MissionUtils.Console.readLineAsync(OUTPUT_MESSAGES.INPUT_GUIDE);

    if (REGEX.test(playerNum)) {
        throw new Error(ERROR_MESSAGES.OUT_OF_RANGE_1_TO_9);
    } else if (playerNum.length != 3) {
        throw new Error(ERROR_MESSAGES.INCORRECT_INPUT_COUNT_3);
    } else if (hasDuplicateNumber(playerNum) == true) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
    const playerNumArray = playerNum.split('');
    await judgeNumber(computerNum, playerNumArray)
}

function hasDuplicateNumber(number) {
    const numberSet = new Set(number);
    return numberSet.size != 3;
}