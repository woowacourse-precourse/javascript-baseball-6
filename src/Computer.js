import { MissionUtils } from "@woowacourse/mission-utils";
import { NUM_DIGITS, MIN_NUMBER, MAX_NUMBER } from "./constants/NumberConstants";

export default class Computer {
    constructor() {
        this.numbers = this.generateRandomNumbers();
    }

    generateRandomNumbers() {
        const numbers = [];
        while(numbers.length < NUM_DIGITS) {
            const num = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
            if(!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        return numbers;
    }
}