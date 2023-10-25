import * as MissionUtils from '@woowacourse/mission-utils';

class App {
    constructor() {
        this.randomNumber = [];
    }

    initGame() {
        this.randomNumber.length = 0;
        while (this.randomNumber.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.randomNumber.includes(number))
                this.randomNumber.push(number);
        }
    }

    async play() {
        try {
            this.initGame();
            MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
            await this.inputNumber();
        } catch (error) {
            throw error;
        }
    }

}

export default App;
