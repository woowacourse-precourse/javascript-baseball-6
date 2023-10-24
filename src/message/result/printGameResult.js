import {Console} from "@woowacourse/mission-utils";

const printGameResult = (winCondition, strikeCount, ballCount)=> {
    if (strikeCount === winCondition) {
        Console.print(`${winCondition}스트라이크`);
        Console.print(`${winCondition}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    } else if (strikeCount && ballCount) {
        Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    } else if (strikeCount && !ballCount) {
        Console.print(`${strikeCount}스트라이크`);
    } else if (!strikeCount && ballCount) {
        Console.print(`${ballCount}볼`);
    } else if (!strikeCount && !ballCount) {
        Console.print("낫싱");
    }
}

export default printGameResult;