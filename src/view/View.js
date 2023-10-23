import { MissionUtils } from "@woowacourse/mission-utils";

class View {
    constructor() {}

    showInitialMessage() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    }
    
    showUserInput() {
        return MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    }

    showResult(result) {
        const { strike, ball } = result;
        if (strike === 0 && ball === 0) {
            MissionUtils.Console.print('낫싱');
            return;
        }

        const userInputResult = [];
        if (ball > 0) {
            userInputResult.push(ball + '볼');
        }
        if (strike > 0) {
            userInputResult.push(strike + '스트라이크');
        }
        MissionUtils.Console.print(userInputResult.join(' '));
    }
}

export default View;