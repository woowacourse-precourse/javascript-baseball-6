import { MissionUtils } from "@woowacourse/mission-utils";

export class Computer {

    createRandomNum() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }
}