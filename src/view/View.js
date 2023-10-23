import { MissionUtils } from "@woowacourse/mission-utils";

class View {
    constructor() {}

    showInitialMessage() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    
}

export default View;