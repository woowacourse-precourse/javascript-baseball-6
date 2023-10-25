import { MissionUtils } from "@woowacourse/mission-utils";

export default class Computer {
  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(randomNum)) {
        answer.push(randomNum);
      }
    }
    return answer;
  }
}
