import { MissionUtils } from "@woowacourse/mission-utils";

class Computer {
    getRandomValue() {
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
            computer.push(number);
            }
        }
    console.log(computer)

    }

}

const play = new Computer();
play.getRandomValue();

export default Computer;