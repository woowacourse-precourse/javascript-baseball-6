import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    verify(input) {
        const regex = /^[1-9]{3}$/;
        return regex.test(input);
    }

    determine(computer, person) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (computer[i] === person[i]) {
                strike++;
            }
            for (let j = 0; j < 3; j++) {
                if (i === j) continue;
                if (person[i] === computer[j]) {
                    ball++;
                }
            }
        }
        if (strike === 3) {
            MissionUtils.Console.print("3스트라이크");
            return true;
        } else if (strike > 0 && ball > 0) {
            MissionUtils.Console.print(
                ball + "볼" + " " + strike + "스트라이크"
            );
        } else if (strike > 0) {
            MissionUtils.Console.print(strike + "스트라이크");
        } else if (ball > 0) {
            MissionUtils.Console.print(ball + "볼");
        } else {
            MissionUtils.Console.print("낫싱");
        }
        return false;
    }

    async play() {
        while (true) {
            MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
            const computer = [];
            while (computer.length < 3) {
                const number = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                    computer.push(number);
                }
            }
            while (true) {
                try {
                    const NUMBER = await MissionUtils.Console.readLineAsync(
                        "숫자를 입력해주세요 : "
                    );
                    if (this.verify(NUMBER)) {
                        const person = NUMBER.split("").map(Number);
                        const set = new Set(person);
                        if (set.size !== 3) {
                            throw new Error("[ERROR]");
                        }
                        if (this.determine(computer, person)) {
                            MissionUtils.Console.print(
                                "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
                            );
                            break;
                        }
                    } else {
                        throw new Error();
                    }
                } catch (error) {
                    throw new Error("[ERROR]");
                }
            }
            MissionUtils.Console.print(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            const SELECT = await MissionUtils.Console.readLineAsync("");
            if (SELECT === "2") {
                break;
            }
            if (SELECT !== "1") {
                throw new Error("[ERROR]");
            }
        }
    }
}

export default App;
