import { MissionUtils } from "@woowacourse/mission-utils";
import { judgeNumber, pickRandomNumber } from "./computer.js";

export async function enterNumber(computerNum) {
    const REGEX = /[^1-9]/; // 숫자 1~9 외의 문자 찾아내는 정규표현식

    const playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (REGEX.test(playerNum)) {
        throw new Error("[ERROR] 1부터 9까지의 숫자만 입력해주세요. (공백 없이)");
    } else if (playerNum.length != 3) {
        throw new Error("[ERROR] 3개의 숫자만 입력해주세요.");
    } else if (hasDuplicateNumber(playerNum) == true) {
        throw new Error("[ERROR] 서로 다른 숫자를 입력해주세요.");
    }
    const playerNumArray = playerNum.split('');
    await judgeNumber(computerNum, playerNumArray)
}

function hasDuplicateNumber(number) {
    const numberSet = new Set(number);
    return numberSet.size != 3;
}