
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
    computer = [];

    constructor() {
        this.computer = [];
    }

    async generateRandomNumbers() {
        while (this.computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computer.includes(number)) {
                this.computer.push(number);
            } else {
                continue;
            }
        }
    }
}

export default BaseballGame;