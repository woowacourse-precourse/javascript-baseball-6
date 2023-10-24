import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        await MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        const COMNUM = this.ComputerNumber();
        var restart = 1;
        while (restart === 1) {
            const USERINPUT = await this.UserInput();
            const USERINPUTArray = USERINPUT.split("").map(Number);
            if (this.CheckNum(USERINPUT)) {
                const result = this.BSResult(COMNUM, USERINPUTArray);
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
        const CHOICE = await MissionUtils.Console.readLineAsync();
        if (CHOICE === "1" || CHOICE === "2") {
            return CHOICE;
        } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    ComputerNumber() {
        const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9);
        const COMPUTER = [];
        COMPUTER.push(RANDOMNUM);
        while (COMPUTER.length < 3) {
            const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!COMPUTER.includes(RANDOMNUM)) {
                COMPUTER.push(RANDOMNUM);
            }
        }
        return COMPUTER.join("");
    }

    CheckNum(USERINPUT) {
        const uniqUSERINPUT = [...new Set(USERINPUT)].join("");
        if (uniqUSERINPUT.length === 3 && !isNaN(USERINPUT)) {
            return true;
        } else {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    BSResult(COMNUM, USERINPUTArray) {
        let STRIKES = 0;
        let BALLS = 0;
        for (let i = 0; i < 3; i++) {
            if (COMNUM.includes(USERINPUTArray[i])) {
                BALLS++;
            }
            if (USERINPUTArray[i] == COMNUM[i]) {
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
