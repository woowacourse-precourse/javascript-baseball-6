import { MissionUtils } from "@woowacourse/mission-utils";


const OutputView = {
    printStartMessage(){
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    },

    printResult(ballCount, strikeCount){
        if (strikeCount === 3){
            return `${strikeCount}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
        } else if (ballCount === 0 && strikeCount === 0) {
            return "낫싱";
        } else if (ballCount === 0) {
            return `${strikeCount}스트라이크`;
        } else if (strikeCount === 0) {
            return `${ballCount}볼`;
        } else {
            return `${ballCount}볼 ${strikeCount}스트라이크`;
        }
    }
}

export default OutputView;