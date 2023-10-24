import { MissionUtils } from "@woowacourse/mission-utils";

// 사용자의 숫자 입력받기
export async function getUserNumber() {
    const userNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    return userNumber;
}

// 게임 재시작 입력받기
export async function getUserAnswer() {
    const userAnswer = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return userAnswer;
}
