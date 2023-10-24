import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.userNum = "";
        this.answer = [];
        this.continueGame = true;
        this.errorMessage = "[ERROR] 숫자가 잘못된 형식입니다.";
    }

    init() {
        this.userNum = "";
        this.answer = [];
        this.continueGame = true;
    }

    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        while (this.continueGame) {
            this.init();
            this.settingAnswer();
            await this.numberBaseball();
            this.continueGame = await this.newGame();
            if (!this.continueGame) {
                break;
            }
        }
    }

    //중복 수 확인
    checkDuplicate() {
        let check = [];
        for (let i = 0; i < this.userNum.length; i++) {
            if (check.includes(this.userNum[i])) {
                return true;
            } else {
                check.push(this.userNum[i]);
            }
        }
        return false;
    }

    //잘못된 입력 에러처리
    wrongInput() {
        if (
            isNaN(Number(this.userNum)) ||
            this.userNum.length !== 3 ||
            this.checkDuplicate() ||
            this.userNum.indexOf("0") !== -1
        ) {
            MissionUtils.Console.print(this.errorMessage);
            throw new Error(this.errorMessage);
        }
    }

    // 유저 입력 처리
    async userInput() {
        this.userNum = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
        );

        this.wrongInput();
    }

    // 정답 셋팅
    settingAnswer() {
        while (this.answer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.answer.includes(number)) {
                this.answer.push(number);
            }
        }
    }

    // 숫자야구게임 로직
    async numberBaseball() {
        let correctAnswer = false;
        while (!correctAnswer) {
            await this.userInput();
            let strike = 0;
            let ball = 0;

            for (let i = 0; i < this.userNum.length; i++) {
                let tmp = this.userNum[i] - "0";
                if (tmp === this.answer[i]) {
                    strike += 1;
                } else if (this.answer.includes(tmp)) {
                    ball += 1;
                }
            }

            //게임 메세지 처리
            let message = "낫싱";
            if (strike === 3) {
                message =
                    "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
                correctAnswer = true;
            } else if (strike > 0) {
                ball > 0
                    ? (message = `${ball}볼 ${strike}스트라이크`)
                    : `${strike}스트라이크`;
            } else if (ball > 0) {
                message = `${ball}볼`;
            }
            MissionUtils.Console.print(message);
        }
    }

    //게임 재시작 처리
    async newGame() {
        let playAgain = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n"
        );
        if (playAgain === "1") {
            return true;
        } else if (playAgain === "2") {
            return false;
        }

        MissionUtils.Console.print(this.errorMessage);
        throw new Error(this.errorMessage);
    }
}

const app = new App();
app.play();

export default App;
