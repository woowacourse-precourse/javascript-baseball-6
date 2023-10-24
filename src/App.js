import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
    // Check dulicate of array
    hasDuplicates(array) {
        return new Set(array).size !== array.length;
    }

    // Get Input Number
    async getNumber() {
        const inputString = await Console.readLineAsync(
            "숫자를 입력해주세요 : "
        );
        const inputNumber = inputString.split("").map(Number);

        // Check duplicate and length
        if (
            this.hasDuplicates(inputNumber) ||
            inputNumber.length !== 3 ||
            inputNumber.includes(0)
        ) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        return inputNumber;
    }

    // Create Answer Numbers
    makeAnswerNumber() {
        const answerNumber = [];
        while (answerNumber.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!answerNumber.includes(randomNumber)) {
                answerNumber.push(randomNumber);
            }
        }
        return answerNumber;
    }

    // Get Strike, Ball Count
    getStrikeAndBallCount(answerNumber, inputNumber) {
        let strikeCount = 0;
        let ballCount = 0;
        for (let i = 0; i < 3; i++) {
            if (answerNumber[i] === inputNumber[i]) {
                strikeCount++;
            } else if (answerNumber.includes(inputNumber[i])) {
                ballCount++;
            }
        }
        return { strikeCount, ballCount };
    }

    // Replay Game or Not
    async isReplay() {
        try {
            const inputString = await Console.readLineAsync(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            if (inputString === "1") {
                return true;
            } else if (inputString === "2") {
                return false;
            } else {
                throw new Error("[ERROR] 잘못된 입력입니다.");
            }
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    async play() {
        Console.print("숫자 야구 게임을 시작합니다.");

        while (true) {
            const answerNumber = this.makeAnswerNumber();
            Console.print("answerNumber", answerNumber);
            let inputNumber = null;

            while (true) {
                // Get input number
                inputNumber = await this.getNumber();

                // Check input number
                if (inputNumber === null) {
                    break;
                }

                // Get strike, ball count
                const { strikeCount, ballCount } = this.getStrikeAndBallCount(
                    answerNumber,
                    inputNumber
                );

                if (strikeCount === 3) {
                    Console.print("3스트라이크");
                    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    const isReplay = await this.isReplay();
                    if (!isReplay) {
                        // End Game
                        return;
                    }
                    break;
                } else if (strikeCount > 0 && ballCount > 0) {
                    Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
                } else if (strikeCount > 0) {
                    Console.print(`${strikeCount}스트라이크`);
                } else if (ballCount > 0) {
                    Console.print(`${ballCount}볼`);
                } else {
                    Console.print("낫싱");
                }
            }
        }
    }
}

export default App;
