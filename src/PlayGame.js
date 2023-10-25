import { MissionUtils } from "@woowacourse/mission-utils";
import ReturnError from "./RetrunError.js";

class PlayGame {
    constructor() {
        this.returnError = new ReturnError();
    }

    randomNumber;
    strikeCount = 0;
    ballCount = 0;
    restartUserInput;


    getStrikeCount() {
        return this.strikeCount;
    }

    getRandomNumber() {
        return this.randomNumber;
    }

    setRandomNumber() {
        const computer = []
        while (computer.length < 3) {
            const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(randomNum)) {
                computer.push(randomNum)
            }
        }
        this.randomNumber = computer;
    }
    
    async handleInput() {
        this.strikeCount = 0;
        this.ballCount = 0;
        try {
            const input = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요:');
            const userInput = input.split('').map(Number);
            this.returnError.sayError(userInput);
            return userInput;
        } catch (ERROR) {
            throw new Error(ERROR)
        }
    }

    async compareNumbers(random, input) {
        for (let i = 0; i < random.length; i++) {
            if (random.includes(input[i])) {
                if (random[i] == input[i]) {
                    this.strikeCount++;
                } else {
                    this.ballCount++;
                }
            }
        }
        this.printResult()
        return this.strikeCount;
    }

    printResult () {
        if (this.strikeCount === 0 && this.ballCount === 0) {
            MissionUtils.Console.print('낫싱');
        } else if (this.ballCount === 0) {
            MissionUtils.Console.print(this.strikeCount + '스트라이크');
        } else if (this.strikeCount === 0) {
            MissionUtils.Console.print(this.ballCount + '볼');
        } else {
            MissionUtils.Console.print(this.ballCount + '볼' + ' ' + this.strikeCount + '스트라이크');
        }
    }
    
    
    async restartInput() {
        try {
            const restartUserInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
            return restartUserInput;
        } catch (ERROR) {
            throw new Error('[ERROR] 1 또는 2를 입력해야 합니다.');
        }
    }
    
}

export default PlayGame;