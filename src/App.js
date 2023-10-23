import * as MissionUtils from '@woowacourse/mission-utils';
import { Random, Console } from '@woowacourse/mission-utils';

class App {
    async play() {
        // 숫자 야구게임 시작하기
        Console.print('숫자 야구 게임을 시작합니다.');

        // 유저에게 숫자 입력받기
        const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

        if (userInput.length !== 3) {
            throw new Error('[ERROR]');
        }

        // 유저에게 입력받은 숫자 -> int형으로
        const userNumberArray = userInput.split('').map((x) => parseInt(x));

        Console.print(`userNumberArray : ${userNumberArray}`);

        /* 컴퓨터의 랜덤 숫자 생성 -> 이건 문제에서 주어진 예시 코드 */
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }

        /* 테스트를 위해 숫자 고정하기 */

        // const computer = [1, 5, 2];

        Console.print(`computerNumber : ${computer}`);

        /* 입력받은 값과 컴퓨터의 랜덤값 비교하기 */
        let strikeCount = 0;
        let ballCount = 0;

        /* 스트라이크 판별 */
        for (let i = 0; i < computer.length; i++) {
            if (userNumberArray[i] === computer[i]) {
                strikeCount++;
                // Console.print(userInput[i]);
            }
        }

        /* 볼 판별 */
        for (let i = 0; i < userInput.length; i++) {
            for (let j = 0; j < computer.length; j++) {
                if (i != j && userNumberArray[i] === computer[j]) {
                    ballCount++;
                }
            }
        }

        {
            /* 결과 출력 */
        }
        /* 0스트라이크 0볼일때 */
        if (strikeCount === 0 && ballCount === 0) {
            Console.print('낫싱');
        } else if (strikeCount > 0 && ballCount > 0) {
            /* 스트라이크 볼 둘다 0 보다 클때 */
            Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        } else if (strikeCount > 0 && ballCount === 0) {
            /* 스트라이크만 존재할때 */
            Console.print(`${strikeCount}스트라이크`);

            /* 스트라이크가 3이면 게임 종료 */
            if (strikeCount === 3) {
                Console.print(`${strikeCount}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
            }
        } else if (strikeCount === 0 && ballCount > 0) {
            /* 볼만 존재할때 */
            Console.print(`${ballCount}볼`);
        }
    }
}

const app = new App();
app.play();

export default App;
