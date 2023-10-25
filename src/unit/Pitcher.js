import {MissionUtils} from "@woowacourse/mission-utils";

class Pitcher {
    constructor() {
        this.gameCountNumbers = []
    }

    setRandomBallCount() {
        while (this.gameCountNumbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.gameCountNumbers.includes(number)) {
                this.gameCountNumbers.push(number);
            }
        }
    }
}

export default Pitcher;