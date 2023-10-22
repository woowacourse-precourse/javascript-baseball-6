import { MissionUtils } from "@woowacourse/mission-utils";
export default class Computer {
    static numbers = [];
    static pickRandomNumbers() {
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
    }
    static returnMessage(expect_numbers) {}
    static clearNumbers() {}
}
