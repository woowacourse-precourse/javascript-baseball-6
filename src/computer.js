import { MissionUtils } from "@woowacourse/mission-utils";

function computer() {
    const computerPickNumber = [];
    while (computerPickNumber.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computerPickNumber.includes(number)) {
            computerPickNumber.push(number);
        }
    }
    return computerPickNumber;
}

export default computer;