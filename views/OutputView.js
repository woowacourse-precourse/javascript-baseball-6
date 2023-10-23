import { MissionUtils } from "@woowacourse/mission-utils";


const OutputView = {
    printStartMessage(){
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    },

    printResult(ballCount, strikeCount){
        if (strikeCount === 3){
            MissionUtils.Console.print(`${strikeCount}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        } else if (ballCount === 0 && strikeCount === 0) {
            MissionUtils.Console.print("낫싱");
        } else if (ballCount === 0) {
            MissionUtils.Console.print(`${strikeCount}스트라이크`);
        } else if (strikeCount === 0) {
            MissionUtils.Console.print(`${ballCount}볼`);
        } else {
            MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        }
    }
}

export default OutputView;