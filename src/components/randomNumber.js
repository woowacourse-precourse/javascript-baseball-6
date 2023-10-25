import { MissionUtils } from '@woowacourse/mission-utils';

/* 컴퓨터의 랜덤 숫자 생성 */
export default function randomNumber() {
    const computer = [];
    while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }

    return computer;
}
