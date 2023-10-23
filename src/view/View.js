import { MissionUtils } from "@woowacourse/mission-utils";

class View {
    constructor() {}

    showInitialMessage() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    
    showUserInput() {
        return MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    }
}

export default View;