import { MissionUtils } from "@woowacourse/mission-utils";

/**
 * @returns 랜덤으로 생성된 3자리 수 문자열로 반환
 */
function generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer.join("");
}

export default generateRandomNumbers;