import { MissionUtils } from "@woowacourse/mission-utils";
import { Storage } from "./Storage.js";

export const AnswerMaker = {
    generate() {
        const computer = [];
        while (computer.length < 3) {
          const number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!computer.includes(number)) {
              computer.push(number);
          }
        }
        Storage.answer = computer;
    }
}

