import { MissionUtils } from "@woowacourse/mission-utils";

class View {
    printStartMsg() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
    }
    printEndMsg() {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
    }
    printHintMsg(hint) {
        MissionUtils.Console.print(hint);
    }
}

export default View;