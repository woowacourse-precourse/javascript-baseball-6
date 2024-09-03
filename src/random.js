import { MissionUtils } from "@woowacourse/mission-utils";

// 컴퓨터의 난수 생성
export function randomNumber() {
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
        computer.push(number);
    }
    }
    return computer.join("");
}
