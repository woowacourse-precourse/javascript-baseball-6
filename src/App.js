import { Random, Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        let willBeRestarted = true;
        Console.print("숫자 야구 게임을 시작합니다.");
        while (willBeRestarted) {
            const answer = this.makeAnswer();

            let userWillRetry = true;

            while (userWillRetry) {
                const inputNumberList = await this.makeInputList();

                const { strike, ball } = this.calculateScore({
                    answer,
                    inputNumberList,
                });

                this.printResult(strike, ball);

                if (strike === 3) {
                    userWillRetry = false;
                }
            }
            willBeRestarted = await this.isUserWillingToRestart();
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

        const inputNumberList =
            inputNumber && inputNumber.split("").map((i) => i / 1); //문자형인 배열에서 숫자형인 배열로 변환
        Console.print(`입력한 값 : ${inputNumber}`);
        return inputNumberList;
    }

    calculateScore({ answer, inputNumberList }) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (answer[i] === inputNumberList[i]) {
                strike += 1;
            } else if (answer.includes(inputNumberList[i])) {
                ball += 1;
            }
        }
        return { strike, ball };
    }

    printResult(strike, ball) {
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

    async isUserWillingToRestart() {
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
