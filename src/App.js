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
            return inputNumber;
        } catch (error) {
            console.error(error.message);
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

    async play() {
        console.log("숫자 야구 게임을 시작합니다.");
        const answerNumber = this.makeAnswerNumber();
        // console.log(answerNumber);

        // Get input number
        const inputNumber = await this.getNumber();
        // console.log(inputNumber);
    }
}

// Run
const app = new App();
app.play();

export default App;
