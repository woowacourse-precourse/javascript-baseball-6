import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        await MissionUtils.Console.print("숫자를 입력해주세요:");
        for (let times = 1; ; times++) {
            const COMNUM = this.ComputerNumber();
            const USERINPUT = await MissionUtils.Console.readLineAsync();
            if (this.CheckNum(USERINPUT)) {
                const result = this.BSResult(COMNUM, USERINPUT);
                if (result === "3스트라이크") {
                    await MissionUtils.Console.print(result);
                    await MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                    await MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
                    const USERINPUT = await MissionUtils.Console.readLineAsync();
                    break;
                } else {
                    await MissionUtils.Console.print(result);
                }
            } else {
                // await MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
                throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
            }
        }
    }

    ComputerNumber() {
        const COMPUTER = [];
        while (COMPUTER.length < 3) {
            const RANDOMNUM = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!COMPUTER.includes(RANDOMNUM)) {
                COMPUTER.push(RANDOMNUM);
            }
        }
        return COMPUTER.join("");
    }

    CheckNum(USERINPUT) {
        if(USERINPUT.length == 3 && typeof value === 'RANDOMNUM'){
            return true
        }else{
            return false
        }
    }

    BSResult(COMNUM, USERINPUT) {
        let STRIKES = 0;
        let BALLS = 0;
        for (let i = 0; i < 3; i++) {
            if (COMNUM.includes(USERINPUT[i])) {
                BALLS++;
            } else if (USERINPUT[i] === COMNUM[i]) {
                STRIKES++;
                BALLS--;
            }
        }
        if (STRIKES === 3) {
            return "3스트라이크";
        } else if (STRIKES > 0 || BALLS > 0) {
            const ANSWERNUM = [
                BALLS > 0 ? `${BALLS}볼 ` : "",
                STRIKES > 0 ? `${STRIKES}스트라이크` : ""
            ];
            return ANSWERNUM.join(' ');
        } else {
            return "낫싱";
        }
    }
}

export default App;