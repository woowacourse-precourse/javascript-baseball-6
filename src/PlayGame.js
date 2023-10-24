import { MissionUtils } from "@woowacourse/mission-utils";

class PlayGame {
    randomNumber;
    strikeCount = 0;
    ballCount = 0;

    getStrikeCount() {
        return this.strikeCount;
    }

    getRandomNumber() {
        return this.randomNumber;
    }

    setRandomNumber() {
        const COMPUTER = []
        while (COMPUTER.length < 3) {
            const RANDOM_NUM = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!COMPUTER.includes(RANDOM_NUM)) {
                COMPUTER.push(RANDOM_NUM)
            }
        }
        this.randomNumber = COMPUTER;
    }
    // 사용자 인풋에 대해 예외처리를 해줘야함
    async handleInput() {
        this.strikeCount = 0;
        this.ballCount = 0;
        try {
            const INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해 주세요:');
            const USER_INPUT = INPUT.split('').map(Number);
            // console.log('USER_INPUT', USER_INPUT);
            return USER_INPUT;
            // this.compareNumbers();
            // ReturnError(USER_INPUT);
        } catch (ERROR) {
            MissionUtils.Console.print(ERROR);
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
}

export default PlayGame;