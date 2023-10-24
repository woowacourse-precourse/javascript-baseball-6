import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.random = [];
    }

    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

        let isGamePlaying = true;

        while (isGamePlaying) {
            // replay를 대비한 초기화
            this.random = [];

            // 3자리 이하의 random 숫자 생성. 길이 2일 때 까지만 push 하면 되므로, 반복 조건은 길이 3 미만이다.
            while (this.random.length < 3) {
                const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
                // 같은 숫자 반복 안하도록 처리
                if (!this.random.includes(randomNum)) {
                    this.random.push(randomNum);
                }
            }

            // 게임은 playGame 의 결과값이 true 일때만 반복한다
            isGamePlaying = await this.playGame();
        }
    }

    async playGame() {
        while (true) {
            // 입력값
            let userInput;
            try {
                userInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

                // 입력값 예외처리 (3자리, 숫자)
                if (!/^[1-9]{3}$/.test(userInput)) {
                    throw new Error("[ERROR] 1부터 9까지의 숫자를 세 자리만 입력하실 수 있습니다.");
                }

                let ball = 0;
                let strike = 0;

                // 입력값 array 처리
                const predictNumber = userInput.split("").map((num) => Number(num));

                for (let i = 0; i < 3; i++) {
                    // 포함하고 있으면 ball +1
                    if (this.random.includes(predictNumber[i])) {
                        ball += 1;
                        // 자리까지 같으면 ball -1, strike +1
                        if (this.random[i] == predictNumber[i]) {
                            ball -= 1;
                            strike += 1;
                        }
                    }
                }

                let message = "낫싱";

                if (ball > 0 && strike > 0) {
                    message = `${ball}볼 ${strike}스트라이크`;
                } else if (ball > 0 && strike === 0) {
                    message = `${ball}볼`;
                } else if (ball === 0 && strike > 0) {
                    message = `${strike}스트라이크`;
                }

                // 메세지 출력
                MissionUtils.Console.print(message);

                if (strike === 3) {
                    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

                    const replay = await MissionUtils.Console.readLineAsync(
                        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n"
                    );

                    if (replay !== "1" && replay !== "2") {
                        throw new Error("[ERROR] 숫자는 1 또는 2만 입력 가능합니다. ");
                    }

                    // 1이면 다시 실행, 2면 종료
                    return replay === "1" ? true : false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}

export default App;
