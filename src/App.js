import { MissionUtils, Console } from "@woowacourse/mission-utils";

// Check dulicate of array
function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}

class App {
    // Get Input Number
    async getNumber() {
        try {
            const inputString = await Console.readLineAsync(
                "숫자를 입력해주세요 : "
            );
            const inputNumber = inputString.split("").map(Number);
            // Check duplicate
            if (hasDuplicates(inputNumber)) {
                throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
            // Check length
            if (inputNumber.length !== 3) {
                throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
            return inputNumber;
        } catch (error) {
            //
        }
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
            //
        }
    }

    async play() {
        console.log("숫자 야구 게임을 시작합니다.");

        while (true) {
            const answerNumber = this.makeAnswerNumber();
            console.log(answerNumber);
            let inputNumber = null;

            while (true) {
                // Get input number
                const inputNumber = await this.getNumber();

                // Get strike, ball count
                const { strikeCount, ballCount } = this.getStrikeAndBallCount(
                    answerNumber,
                    inputNumber
                );
                if (strikeCount === 3) {
                    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    const isReplay = await this.isReplay();
                    if (!isReplay) {
                        return; // 게임 종료
                    }
                    break;
                } else if (strikeCount === 0 && ballCount === 0) {
                    console.log("낫싱");
                } else if (strikeCount > 0 && ballCount > 0) {
                    console.log(`${strikeCount} 스트라이크 ${ballCount} 볼`);
                } else if (strikeCount > 0) {
                    console.log(`${strikeCount} 스트라이크`);
                } else if (ballCount > 0) {
                    console.log(`${ballCount} 볼`);
                }
            }
        }
    }
}

const app = new App();
app.play();

export default App;
