import {MissionUtils} from "@woowacourse/mission-utils";

class Pitcher {
    constructor() {
        this.gameNumbers = []
    }

    setRandomGameNumbers() {
        while (this.gameNumbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.gameNumbers.includes(number)) {
                this.gameNumbers.push(number);
            }
        }
    }
}

export default Pitcher;