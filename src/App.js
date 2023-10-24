import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        const comNum = this.ComNum();
        var restart = 1;
        while (restart === 1) {
            await MissionUtils.Console.print("comNum : "); //테스트
            await MissionUtils.Console.print(comNum); //테스트
            const userInput = await this.UserInput();
            await MissionUtils.Console.print("userInput : "); //테스트
            await MissionUtils.Console.print(userInput); //테스트
            const inputArray = userInput.split("").map(Number);
            await MissionUtils.Console.print("inputArray : "); //테스트
            await MissionUtils.Console.print(inputArray); //테스트
            await MissionUtils.Console.print("this.CheckNum(userInput) : "); //테스트
            await MissionUtils.Console.print(this.CheckNum(userInput)); //테스트
            if (this.CheckNum(userInput) === true) {
                const result = this.BSResult(comNum, inputArray);
                await MissionUtils.Console.print("ComNum2 : "); //테스트
                await MissionUtils.Console.print(comNum); //테스트
                await MissionUtils.Console.print("result : "); //테스트
                await MissionUtils.Console.print(result);
                if (result === "3스트라이크") {
                    await MissionUtils.Console.print(
                        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
                    );
                    restart = await this.Restart();
                }
            }
        }
    }

    async UserInput() {
        await MissionUtils.Console.print("숫자를 입력해주세요:");
        return await MissionUtils.Console.readLineAsync();
    }

    async Restart() {
        await MissionUtils.Console.print(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );
        const choice = await MissionUtils.Console.readLineAsync();
        await MissionUtils.Console.print("choice : "); //테스트
        await MissionUtils.Console.print(choice); //테스트
        if (choice === "1" || choice === "2") {
            return choice;
        } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    ComNum() {
        const ranNum = MissionUtils.Random.pickNumberInRange(1, 9);
        const comarr = [];
        comarr.push(ranNum);
        while (comarr.length < 3) {
            const ranNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!comarr.includes(ranNum)) {
                comarr.push(ranNum);
            }
        }
        return comarr.join("");
    }

    CheckNum(userInput) {
        const uniqueInput = [...new Set(userInput)].join("");
        if (uniqueInput.length === 3 && !isNaN(userInput)) {
            return true;
        } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    BSResult(comNum, inputArray) {
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (comNum.includes(inputArray[i])) {
                ball++;
            }
            if (inputArray[i] == comNum[i]) {
                strike++;
                ball--;
            }
        }
        if (strike === 3) {
            return "3스트라이크";
        }
        if (strike > 0 || ball > 0) {
            const answerNum = [
                ball > 0 ? `${ball}볼 ` : "",
                strike > 0 ? `${strike}스트라이크` : "",
            ];
            return answerNum.join(" ");
        }
        return "낫싱";
    }
}

export default App;
