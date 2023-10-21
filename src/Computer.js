import { MissionUtils } from "@woowacourse/mission-utils";
import { NUM_DIGITS } from "./constants/NumberConstants";

export default class Computer {
    constructor() {
        this.numbers = this.generateRandomNumbers();
    }

    generateRandomNumbers() {
        const numbers = [];
        while(numbers.length < NUM_DIGITS) {
            const num = MissionUtils.Random.pickNumberInRange(1, 9);
            if(!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers;
    }
}