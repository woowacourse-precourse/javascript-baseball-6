// import * as GameChecker from './checkGameResults';
import { MissionUtils } from '@woowacourse/mission-utils';

export default function printGameResults(value) {
    if (value.ball !== 0 || value.strike !== 0) {
        if (value.strike === 3) {
            MissionUtils.Console.print(`${value.strike}스트라이크`);
            MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);

            return true;
        } else if (value.ball === 0) MissionUtils.Console.print(`${value.strike}스트라이크`);
        else if (value.strike === 0) MissionUtils.Console.print(`${value.ball}볼`);
        else if (value.strike !== 0 && value.ball !== 0)
            MissionUtils.Console.print(`${value.ball}볼 ${value.strike}스트라이크`);
    } else {
        MissionUtils.Console.print(`낫싱`);
        return false;
    }
    return false;
}
