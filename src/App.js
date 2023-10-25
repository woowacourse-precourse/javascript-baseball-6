import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.randomNumber = [];
        // predictNumber = [];
        this.strike = 0;
        this.ball = 0;
    }

    async play() {
        // 주어진 util사용하여 중복하지 않는 랜덤 숫자 생성

        let isGamePlaying = true;

        while (isGamePlaying) {
            this.randomNumber = [];
            while (this.randomNumber.length < 3) {
                const num = MissionUtils.Random.pickNumberInRange(1, 9);

                if (!this.randomNumber.includes(num)) {
                    this.randomNumber.push(num);
                }
            }

            MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

            isGamePlaying = await this.playGame();
        }
    }

    async startGame() {}

    // 게임
    async playGame() {
        while (true) {
            let predictNumber;

            this.strike = 0;
            this.ball = 0;

            try {
                // 입력값
                predictNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");

                // 입력값 예외처리 (3자리, 숫자)
                if (!/^[1-9]{3}$/.test(predictNumber)) {
                    throw new Error("[ERROR] 1부터 9까지의 숫자를 세 자리만 입력하실 수 있습니다.");
                }

                predictNumber = Array.from(predictNumber, Number);

                // for문과 if 문 이용해서 각자리 비교
                for (let i = 0; i < 3; i++) {
                    if (predictNumber[i] == this.randomNumber[i]) {
                        this.strike++;
                    } else if (this.randomNumber.includes(Number(predictNumber[i]))) {
                        this.ball++;
                    }
                }

                let message = "낫싱";

                if (this.ball > 0 && this.strike > 0) {
                    message = `${this.ball}볼 ${this.strike}스트라이크`;
                } else if (this.ball > 0 && this.strike === 0) {
                    this.message = `${this.ball}볼`;
                } else if (this.ball === 0 && this.strike > 0) {
                    message = `${this.strike}스트라이크`;
                }

                // 메세지 출력
                MissionUtils.Console.print(message);
                // 출력 메세지
                const STRIKE_MESSAGE = `3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;

                if (this.strike === 3) {
                    MissionUtils.Console.print(STRIKE_MESSAGE);
                    // this.replayGame();

                    let replay = await MissionUtils.Console.readLineAsync(
                        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
                    );

                    // 입력값 숫자 확인
                    if (isNaN(replay)) {
                        throw TypeError("[ERROR] 숫자만 입력해주세요.");
                    }

                    // 한자리 수인지 확인
                    if (replay.length > 1) {
                        throw Error("[ERROR] 숫자는 1개까지만 입력 가능합니다.");
                    }

                    replay = parseInt(replay);

                    // 3 이상의 수이거나 0인지 확인
                    if (replay > 2 || replay == 0) {
                        throw Error("[ERROR] 1이나 2만 입력해주세요.");
                    }

                    // 1이면 계속, 0이면 종료
                    if (replay === 1) {
                        return true;
                    } else return false;
                }
            } catch (error) {
                return Promise.reject(error);
            }
        }
    }
}

export default App;
