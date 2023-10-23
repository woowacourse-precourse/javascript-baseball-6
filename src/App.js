import { Random, Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        let willBeRestarted = true;
        console.log("숫자 야구 게임을 시작합니다.");
        while (willBeRestarted) {
            const answer = this.makeAnswer();
            console.log(`play안에있는 ${answer}`); //테스트 확인용 코드
            let userWillRetry = true;
            while (userWillRetry) {
                const inputNumberList = await this.makeInputList();

                const { strike, ball } = this.scoreCalculator({
                    answer,
                    inputNumberList,
                });

                console.log(`strike : ${strike} ball :${ball}`);

                this.scoreScriptor(strike, ball);
                if (strike === 3) {
                    userWillRetry = false;
                }
            }
            willBeRestarted = await this.userWantToRestart();
        }
    }
    makeAnswer() {
        let answer = [];
        while (answer.length < 3) {
            let number = Random.pickNumberInRange(1, 9);
            if (!answer.includes(number)) {
                answer.push(number);
            }
        }
        return answer;
    }

    async makeInputList() {
        const inputNumber = await Console.readLineAsync().then(
            (value) => value
        );

        if (isNaN(Number(inputNumber)) || inputNumber.length !== 3) {
            throw new Error(`[ERROR] 숫자가 잘못된 형식입니다.`);
        }

        console.log(`입력된 숫자 : ${inputNumber}`);

        let inputNumberList =
            inputNumber && inputNumber.split("").map((i) => i / 1); //문자형인 배열에서 숫자형인 배열로 변환
        return inputNumberList;
    }

    scoreCalculator({ answer, inputNumberList }) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (answer[i] === inputNumberList[i]) {
                strike += 1;
            } else if (answer.includes(inputNumberList[i])) {
                ball += 1;
            }
        }
        console.log(`함수 리턴 직전 strike : ${strike} ball :${ball}`);
        return { strike, ball };
    }

    scoreScriptor(strike, ball) {
        if (strike === 3) {
            Console.print(
                `${strike}스트라이크입니다\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
            );
            Console.print(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            return;
        }
        if (strike && ball) {
            Console.print(`${ball}볼 ${strike}스트라이크`);
        } else if (strike && !ball) {
            Console.print(`${strike}스트라이크`);
        } else if (!strike && ball) {
            Console.print(`${ball}볼`);
        } else if (!strike && !ball) {
            Console.print("낫싱");
        }
    }

    async userWantToRestart() {
        let restart = await Console.readLineAsync().then((value) => value);
        if (restart === "1") {
            Console.print("1번을 눌렀습니다. 게임을 재시작합니다.");
            return true;
        } else if (restart === "2") {
            Console.print("2번을 눌렀습니다. 게임을 종료하겠습니다.");
            return false;
        }
    }
}

export default App;
