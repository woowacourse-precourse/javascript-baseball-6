import { MissionUtils } from "@woowacourse/mission-utils";

export default class App {
    constructor() {
        this.computerNumbers = [];
        this.addComputerNumbers(); 
    }

    addComputerNumbers() {
        while (this.computerNumbers.length < 3) {
            const randomDigit = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.computerNumbers.includes(randomDigit)) {
                this.computerNumbers.push(randomDigit);
            }
        }
    }
}