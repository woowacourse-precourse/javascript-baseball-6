import {MissionUtils} from "@woowacourse/mission-utils";

export const wantReStart = async () => {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const RESTART_INPUT = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    if (RESTART_INPUT === '1') {
        return false;
    } else if (RESTART_INPUT === '2') {
        return true;
    } else { //1,2를 제외한 경우 예외 처리
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
}