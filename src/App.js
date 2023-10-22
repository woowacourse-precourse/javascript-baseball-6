import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        // 게임 시작 문구 출력
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

        async function game() {
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
            let win = false;
            while (!win) {
                const playerInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
                const player = playerInput.split("").map((number) => parseInt(number));
                let ball = 0;
                let strike = 0;
                // 숫자 비교해서 볼, 스트라이크 판단
                for (let i = 0; i < 3; i++) {
                    if (player[i] === computer[i]) {
                        strike++;
                    } else if (computer.includes(player[i])) {
                        ball++;
                    }
                }
                // 볼, 스트라이크 개수에 따른 출력
                if (ball === 0 && strike === 0) {
                    MissionUtils.Console.print("낫싱");
                } else if (strike === 3) {
                    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    win = true;
                } else {
                    MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
                }
            }
        }
        let restart = true;
        while (restart) {
            await game();
            const restartInput = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
            if (restartInput === "2") {
                restart = false;
            }
        }
    }
}

// 앱 테스트 실행용
const app = new App();
app.play();

export default App;
