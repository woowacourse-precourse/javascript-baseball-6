import { MissionUtils } from "@woowacourse/mission-utils";
import { judgeNumber } from "./computer.js";

export async function enterNumber(computerNum) {
    const REGEX = /[^1-9]/; // 숫자 1~9 외의 문자 찾아내는 정규표현식

    try {
        const playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        // 예외사항 처리
        if (REGEX.test(playerNum)) {
            MissionUtils.Console.print('[ERROR] 1부터 9까지의 숫자만 입력해주세요. (공백 없이)');
            throw new Error('숫자 1~9 외 문자 입력 오류');
        } else if (playerNum.length != 3) {
            MissionUtils.Console.print('[ERROR] 3개의 숫자만 입력해주세요.');
            throw new Error('숫자 개수 오류');
        } else if (hasUniqueDigits(playerNum) == false) {
            MissionUtils.Console.print('[ERROR] 서로 다른 숫자를 입력해주세요.');
            throw new Error('숫자 중복 오류');
        }
        const playerNumArray = playerNum.split('');
        judgeNumber(computerNum, playerNumArray)
    } catch (error) {
        MissionUtils.Console.print(error);
        return false;
    }
}

function hasUniqueDigits(number) { // 숫자가 모두 유일한지 확인
    const digitSet = new Set(number);
    return digitSet.size == 3;
}