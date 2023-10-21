import {MissionUtils} from "@woowacourse/mission-utils";

export async function wantReStart() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    return  await MissionUtils.Console.readLineAsync('');
}