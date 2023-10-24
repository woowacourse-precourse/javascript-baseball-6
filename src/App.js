import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.randomNumber = [];
        this.predictNumber = [];
        this.strike = 0;
        this.ball = 0;
    }

    async play() {
        this.startGame();
    }

    startGame() {
        // 주어진 util사용하여 중복하지 않는 랜덤 숫자 생성
        this.randomNumber = [];
        this.predictNumber = [];
        while (this.randomNumber.length < 3) {
            const num = MissionUtils.Random.pickNumberInRange(1, 9);

            if (!this.randomNumber.includes(num)) {
                this.randomNumber.push(num);
            }
        }

        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.playGame();
    }

    async inputNumber() {
        this.strike = 0;
        this.ball = 0;

        try {
            // 입력값
            this.predictNumber = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");

            // 입력값 예외처리 (3자리, 숫자)
            if (!/^[1-9]{3}$/.test(this.predictNumber)) {
                throw new Error("[ERROR] 1부터 9까지의 숫자를 세 자리만 입력하실 수 있습니다.");
            }

            this.predictNumber = Array.from(this.predictNumber, Number);
        } catch (error) {
            Promise.reject(error);
        }
    }

    // 게임
    async playGame() {
        while (true) {
            await this.inputNumber();
            // for문과 if 문 이용해서 각자리 비교
            for (let i = 0; i < 3; i++) {
                // 포함하고 있으면 ball +1
                if (this.randomNumber.includes(this.predictNumber[i])) {
                    this.ball += 1;

                    // 자리까지 같으면 ball -1, strike +1
                    if (this.randomNumber[i] == this.predictNumber[i]) {
                        this.ball -= 1;
                        this.strike += 1;
                    }
                }
            }

            // 출력 메세지
            const resultMessage = this.ball + "볼 " + this.strike + "스트라이크";
            const nothingMessage = "낫싱";
            const strikeMessage = `3스트라이크 \n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;

            if (this.strike === 3) {
                MissionUtils.Console.print(strikeMessage);
                this.replayGame();
                return false;
            } else if ((this.ball === 0) & (this.strike === 0)) {
                MissionUtils.Console.print(nothingMessage);
            } else {
                MissionUtils.Console.print(resultMessage);
            }
        }
    }

    // 게임 replay 여부
    async replayGame() {
        let replay;

        try {
            // 입력값
            replay = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

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
                this.startGame();
            } else return;
        } catch (error) {
            Promise.reject(error);
        }
    }
}

const app = new App();
app.play();

export default App;
