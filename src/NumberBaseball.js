import { MissionUtils } from "@woowacourse/mission-utils";

export class NumberBaseball {
    constructor() {
        this.computer = NumberBaseball.generate();
        this.strike = 0;
        this.ball = 0;
    }

    static generate() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    validateNumber(usernumber) {
        const numSet = new Set(usernumber);

        if (usernumber.length !== 3) {
            throw new Error("3자리 숫자를 입력해야 합니다.");
        }

        if (!/^\d+$/.test(usernumber)) {
            throw new Error("숫자만 입력할 수 있습니다.");
        }

        if (numSet.size !== usernumber.length) {
            throw new Error("중복되지 않은 3자리 숫자를 입력해야 합니다.");
        }
    }

    compare(usernumber) {
        this.strike = 0;
        this.ball = 0;

        for (let i = 0; i < 3; i++) {
            if (this.computer[i] === parseInt(usernumber[i])) {
                this.strike += 1;
            } else if (this.computer.includes(parseInt(usernumber[i]))) {
                this.ball += 1;
            }
        }
    }

    countNumber() {
        let result = '';
    
        if (this.ball > 0) {
            if (result) {
                result += ' ';
            }
            result += `${this.ball}볼`;
        }

        if (this.strike > 0) {
            result += `${this.strike}스트라이크`;
        }
    
        if (result) {
            MissionUtils.Console.print(result);
        } else {
            MissionUtils.Console.print("낫싱");
        }
    
        // 3스트라이크인 경우 게임 종료
        if (this.strike === 3) {
            MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
            return true; // 게임 종료 신호
        }
    
        return false; // 게임 계속
    }
    

    async gameEnd() {
        const answer = await MissionUtils.Console.readLineAsync(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
        );

        if (answer === "1") {
            this.computer = NumberBaseball.generate();
            this.play(); // 새 게임 시작
        } else if (answer === "2") {
            MissionUtils.Console.print("게임을 종료합니다.");
        } else {
            throw new Error("1 또는 2를 입력해야 합니다.");
        }
    }

    async getInput() {
        const usernumber = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
        );

        try {
            this.validateNumber(usernumber);
            this.compare(usernumber);
            const isGameEnded = this.countNumber();

            if (!isGameEnded) {
                // 게임이 끝나지 않았으면 다시 입력 요청
                await this.getInput();
            } else {
                // 게임 종료 후 새 게임 여부 확인
                await this.gameEnd();
            }
        } catch (error) {
            MissionUtils.Console.print(error.message);
            await this.getInput(); // 에러 발생 시 다시 입력 요청
        }
    }

    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        await this.getInput(); // 게임 시작
    }
}

export default NumberBaseball;
