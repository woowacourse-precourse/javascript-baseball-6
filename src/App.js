import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {
        let userinput;
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        while (true) {
            userinput = await MissionUtils.Console.readLineAsync(
                '숫자를 입력해주세요.'
            );
        }
    }
    // 정답을 생성하는 함수

    // 유저의 입력을 판단하는 함수

    // 게임을 다시 시작할지 판단하는 함수
}

export default App;
