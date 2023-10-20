import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        while (true) {
            const COMNUM = this.ComputerNumber();
            const USERINPUT = await this.UserInput();
            if (this.CheckNum(USERINPUT)) {
                const result = this.BSResult(COMNUM, USERINPUT);
                await MissionUtils.Console.print(result);
                if (result === "3스트라이크") {
                    await MissionUtils.Console.print(
                        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
                    );
                    const restart = await this.Restart();
                    if (restart === "2") {
                        break;
                    }
                }
            } else {
                throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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
        if (choice === "1" || choice === "2") {
            return choice;
        } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    ComputerNumber() {
        const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9, 3);
        return RANDOMNUM;
    }

    CheckNum(USERINPUT) {
        if (USERINPUT.length === 3 && !isNaN(USERINPUT)) {
            return true;
        }
        return false;
    }

    BSResult(COMNUM, USERINPUT) {
        let STRIKES = 0;
        let BALLS = 0;
        for (let i = 0; i < 3; i++) {
            if (COMNUM.includes(USERINPUT[i])) {
                BALLS++;
            }
            if (USERINPUT[i] === COMNUM[i]) {
                STRIKES++;
                BALLS--;
            }
        }
        if (STRIKES === 3) {
            return "3스트라이크";
        }
        if (STRIKES > 0 || BALLS > 0) {
            const ANSWERNUM = [
                BALLS > 0 ? `${BALLS}볼 ` : "",
                STRIKES > 0 ? `${STRIKES}스트라이크` : "",
            ];
            return ANSWERNUM.join(" ");
        }
        return "낫싱";
    }
}

export default App;
