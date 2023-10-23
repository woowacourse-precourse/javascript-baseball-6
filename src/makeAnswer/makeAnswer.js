import { MissionUtils } from "@woowacourse/mission-utils";

export default function makeAnswer() {
  const answerList = [];

  while (answerList.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answerList.includes(number)) {
      answerList.push(number);
    }
  }
}