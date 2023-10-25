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
}

export default App;
