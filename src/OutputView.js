import { Console } from "@woowacourse/mission-utils";

export const OutputView = {
    printStartComment() {
        Console.print('숫자 야구 게임을 시작합니다.');
    },

    printResult(strick, ball) {
        if (strick !== 0 && ball !== 0) {
            return Console.print(`${ball}볼 ${strick}스트라이크`);
        } else if (strick === 0 && ball!== 0) {
            return Console.print(`${ball}볼`);
        } else if (strick!== 0 && ball === 0) {
            return Console.print(`${strick}스트라이크`);
        } else {
            return Console.print('낫싱');
        }
    }
}