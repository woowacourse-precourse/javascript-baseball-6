import { MissionUtils } from '@woowacourse/mission-utils';

/* 결과를 출력하는 기능 */
export default function printResult(value) {
    if (value.ball !== 0 || value.strike !== 0) {
        if (value.strike === 3) {
            MissionUtils.Console.print(`${value.strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
            return true;
        } else if (value.ball === 0) MissionUtils.Console.print(`${value.strike}스트라이크`);
        else if (value.strike === 0) MissionUtils.Console.print(`${value.ball}볼`);
        else MissionUtils.Console.print(`${value.ball}볼 ${value.strike}스트라이크`);
    } else MissionUtils.Console.print(`낫싱`);
    return false;
}
