import {MissionUtils} from "@woowacourse/mission-utils";

class Pitcher {
    constructor() {
        this.ballCountNumbers = []
    }

    setRandomBallCount() {
        while (this.ballCountNumbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.ballCountNumbers.includes(number)) {
                this.ballCountNumbers.push(number);
            }
        }
    }
}

export default Pitcher;