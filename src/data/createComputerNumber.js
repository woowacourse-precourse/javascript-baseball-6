/* 상대방(컴퓨터)의 수 생성을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";

export default function createComputerNumber(){
    const answer = [];
    while (answer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!answer.includes(number)) {
            answer.push(number);
        }
    }
    return answer.join();
}