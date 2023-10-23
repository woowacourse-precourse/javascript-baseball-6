import { MissionUtils } from "@woowacourse/mission-utils";

moduele.exports = function coumputerRandom() {
        const randomValue = [];
        while (randomValue.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!randomValue.includes(number)) {
                randomValue.push(number);
            }
        }
    console.log(randomValue)

    }