import * as MissionUtils from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class App {
    async play() {
        // 숫자 야구게임 시작하기
        Console.print('숫자 야구 게임을 시작합니다.');

        // 유저에게 숫자 입력받기
        const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ');

        if (userInput.length !== 3) {
            throw new Error('[ERROR]');
        }

        Console.print(userInput);

        // 컴퓨터의 랜덤 숫자 생성 -> 이건 문제에서 주어진 예시 코드
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
    }
}

const app = new App();
app.play();

export default App;
