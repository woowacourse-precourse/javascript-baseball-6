import { MissionUtils } from "@woowacourse/mission-utils";
import { judgeNumber } from "./computer.js";

export async function enterNumber(computerNum) {
    const regex = /[^0-9]/; // 숫자가 아닌 문자를 찾는 정규 표현식

    try {
        let playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        // 예외사항 처리
        if (regex.test(playerNum)) {
            MissionUtils.Console.print('[ERROR] 공백 없이 숫자만 입력해주세요.');
            throw new Error('숫자 외 문자 입력 오류');
        } else if (playerNum.length != 3) {
            MissionUtils.Console.print('[ERROR] 3개의 숫자만 입력해주세요.');
            throw new Error('숫자 개수 오류');
        } else if (hasUniqueDigits(playerNum) == false) {
            MissionUtils.Console.print('[ERROR] 서로 다른 숫자를 입력해주세요.');
            throw new Error('숫자 중복 오류');
        }
        let playerNumArray = playerNum.split('');
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