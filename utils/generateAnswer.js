import { Random } from "@woowacourse/mission-utils";
import { IN_GAME_SETTING } from "./Constants.js";

export default function generateRightAnswer() {
  const rightAnswer = [];

  while (rightAnswer.length < IN_GAME_SETTING.answerLength) {
    const number = Random.pickNumberInRange(1, 9);
    if (!rightAnswer.includes(number)) {
      rightAnswer.push(number);
    }
  }

  return rightAnswer;
}
