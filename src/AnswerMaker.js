import { MissionUtils } from "@woowacourse/mission-utils";

export const AnswerMaker = {
    generate() {
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
              computer.push(number);
          }
        }
    console.log(computer);
    return computer;
    }
}

