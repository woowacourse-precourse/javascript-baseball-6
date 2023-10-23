import { MissionUtils } from "@woowacourse/mission-utils";
import getUserGameDecision from "./getUserGameDecision";
import getUserNumberInput from "./getUserNumberInput";

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
    async getUserGameDecision() {
        return await getUserGameDecision();
    }
    async getUserNumberInput() {
        return await getUserNumberInput();
    }
}

export default View;