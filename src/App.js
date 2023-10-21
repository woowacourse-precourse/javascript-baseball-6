import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        // 게임 시작 문구 출력
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

        // 게임 실행
        // 임의의 3자리 숫자를 생성
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }

        // 플레이어에게 3자리 숫자를 입력받는다.
        const playerInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        const player = playerInput.split("").map((number) => parseInt(number));
        console.log(player);
    }
}

// 앱 테스트 실행용
const app = new App();
app.play();

export default App;
